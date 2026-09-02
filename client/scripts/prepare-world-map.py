"""Rebuild the world map export as a resolution-independent SVG.

Usage: python scripts/prepare-world-map.py <source.png>

The export is white land + purple routes/labels on black at ~1000px wide, but the section renders
it at 1130 CSS px (2260 device px on retina), so the raster was always upscaled and soft. Tracing
every pixel does not help either: at this resolution the route dots, pins and label glyphs are only
a few pixels across and trace into ragged blobs.

So the two halves are handled differently. Coastlines are organic and survive tracing, but the
routes, pins and labels are regular shapes, so they are measured from the artwork and re-emitted as
real vector primitives (dashed strokes, a pin symbol, live text) that stay sharp at any size.
"""
import sys
from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public/destination-marketing-agency/images/global/world-map-reach.svg"

# --- source decoding -------------------------------------------------------
PURPLE_REF = 180  # brightest channel of the artwork's purple; below it means partial coverage
SATURATION_MIN = 25
ALPHA_FLOOR = 8
LAND_CUTOFF = 128
ART_CUTOFF = 150  # separates touching shapes for classification, at the cost of eroding thin ones
ROUTE_CUTOFF = 110  # routes are fitted from whole pixels, so they want the unaroded mask

# --- output styling --------------------------------------------------------
LAND_COLOR = "#E8E7E5"  # land is drawn pure white, which is invisible on the white section
ART_COLOR = "#822AB7"
LAND_EPS = 0.4
INDIA_EPS = 0.25
LABEL_FONT = "Alan Sans, Poppins, Arial, sans-serif"
CAP_RATIO = 0.72  # cap height as a fraction of font size, for the label font

# Teardrop with a punched-out centre, proportioned to match the marker in the artwork.
PIN_PATH = (
    "M50 140C20 90 0 75 0 50A50 50 0 1 1 100 50C100 75 80 90 50 140Z"
    "M31 50A19 19 0 1 0 69 50A19 19 0 1 0 31 50Z"
)
PIN_VIEW_W, PIN_VIEW_H = 100, 140

LABELS = {
    "uk": "UNITED KINGDOM",
    "pt": "PORTUGAL",
    "uae": "UNITED ARAB EMIRATES",
    "zm": "ZAMBIA",
    "sg": "SINGAPORE",
}


# --- pixel helpers ---------------------------------------------------------
def to_rgba(im: Image.Image) -> Image.Image:
    """Drop the black card, recovering the coverage it encoded as alpha."""
    src = im.convert("RGB")
    out = Image.new("RGBA", src.size)
    sp, op = src.load(), out.load()
    w, h = src.size
    for y in range(h):
        for x in range(w):
            r, g, b = sp[x, y]
            mx, mn = max(r, g, b), min(r, g, b)
            if mx <= ALPHA_FLOOR:
                continue
            if mx - mn > SATURATION_MIN:
                op[x, y] = (r, g, b, 255 if mx >= PURPLE_REF else round(mx / PURPLE_REF * 255))
            else:
                op[x, y] = (255, 255, 255, mx)
    return out


def build_masks(im: Image.Image):
    px = im.load()
    w, h = im.size
    land = [[False] * w for _ in range(h)]
    art = [[False] * w for _ in range(h)]
    route = [[False] * w for _ in range(h)]
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            if max(r, g, b) - min(r, g, b) > SATURATION_MIN:
                if max(r, g, b) >= ART_CUTOFF:
                    art[y][x] = True
                if max(r, g, b) >= ROUTE_CUTOFF:
                    route[y][x] = True
            elif a >= LAND_CUTOFF:
                land[y][x] = True
    return land, art, route


def restore_land_under_art(land, purple, w, h, reach):
    """The purple artwork punches holes in the land it covers.

    Those holes flash white wherever a redrawn marker does not sit exactly on the old one, so land
    is put back under any artwork that has land close by on all four sides. Restricting this to
    purple pixels keeps real coastlines and narrow seas intact.
    """
    grid = np.array(land, dtype=bool)
    art = np.array(purple, dtype=bool)
    idx_x = np.arange(w)[None, :].repeat(h, axis=0)
    idx_y = np.arange(h)[:, None].repeat(w, axis=1)

    def nearest(axis, forward):
        marks = np.where(grid, idx_x if axis == 1 else idx_y, -1 if forward else 10**6)
        run = np.maximum.accumulate if forward else np.minimum.accumulate
        scan = marks if forward else marks[:, ::-1] if axis == 1 else marks[::-1, :]
        acc = run(scan, axis=axis)
        if not forward:
            acc = acc[:, ::-1] if axis == 1 else acc[::-1, :]
        return acc

    left = idx_x - nearest(1, True)
    right = nearest(1, False) - idx_x
    up = idx_y - nearest(0, True)
    down = nearest(0, False) - idx_y
    enclosed = (left <= reach) & (right <= reach) & (up <= reach) & (down <= reach)
    filled = grid | (art & enclosed)
    return filled.tolist()


def subtract(mask, comps, w, h, pad):
    """Blank out classified shapes, plus a margin for the halo the cutoff left behind."""
    out = [row[:] for row in mask]
    for c in comps:
        for x, y in c["pts"]:
            for dy in range(-pad, pad + 1):
                for dx in range(-pad, pad + 1):
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < w and 0 <= ny < h:
                        out[ny][nx] = False
    return out


def components(mask, w, h):
    seen = [[False] * w for _ in range(h)]
    out = []
    for y0 in range(h):
        for x0 in range(w):
            if not mask[y0][x0] or seen[y0][x0]:
                continue
            q = deque([(x0, y0)])
            seen[y0][x0] = True
            pts = []
            while q:
                x, y = q.popleft()
                pts.append((x, y))
                for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < w and 0 <= ny < h and mask[ny][nx] and not seen[ny][nx]:
                        seen[ny][nx] = True
                        q.append((nx, ny))
            xs = [p[0] for p in pts]
            ys = [p[1] for p in pts]
            out.append(
                {
                    "pts": pts,
                    "area": len(pts),
                    "x0": min(xs), "x1": max(xs), "y0": min(ys), "y1": max(ys),
                    "bw": max(xs) - min(xs) + 1, "bh": max(ys) - min(ys) + 1,
                    "cx": sum(xs) / len(pts), "cy": sum(ys) / len(pts),
                }
            )
    return out


# --- contour tracing (land + India) ---------------------------------------
def _cell_edges(x, y, mask):
    nw, ne = mask[y][x], mask[y][x + 1]
    se, sw = mask[y + 1][x + 1], mask[y + 1][x]
    idx = (int(nw) << 3) | (int(ne) << 2) | (int(se) << 1) | int(sw)
    if idx in (0, 15):
        return []
    v = [(x + 0.5, y + 1.0), (x + 1.0, y + 0.5), (x + 0.5, y), (x + 0.0, y + 0.5)]
    pairs = {
        1: (3, 0), 2: (0, 1), 3: (3, 1), 4: (1, 2), 6: (0, 2), 7: (3, 2),
        8: (2, 3), 9: (2, 0), 11: (2, 1), 12: (1, 3), 13: (1, 0), 14: (0, 3),
    }
    if idx in pairs:
        a, b = pairs[idx]
        return [(v[a], v[b])]
    if idx == 5:
        return [(v[3], v[0]), (v[1], v[2])]
    if idx == 10:
        return [(v[0], v[1]), (v[2], v[3])]
    return []


def all_contours(mask, w, h):
    adj = {}
    for y in range(h - 1):
        for x in range(w - 1):
            for a, b in _cell_edges(x, y, mask):
                ka, kb = (round(a[0] * 2), round(a[1] * 2)), (round(b[0] * 2), round(b[1] * 2))
                adj.setdefault(ka, []).append((kb, b))
                adj.setdefault(kb, []).append((ka, a))
    visited = set()
    loops = []
    for start in list(adj):
        if start in visited:
            continue
        loop = []
        prev, cur, pt = None, start, adj[start][0][1]
        while cur is not None and cur not in visited:
            visited.add(cur)
            loop.append(pt)
            nxt = next((n for n in adj.get(cur, []) if n[0] != prev and n[0] not in visited), None)
            if nxt is None:
                break
            prev, cur, pt = cur, nxt[0], nxt[1]
        if len(loop) >= 4:
            loops.append(loop)
    return loops


def chaikin(points):
    n = len(points)
    if n < 4:
        return points
    out = []
    for i in range(n):
        ax, ay = points[i]
        bx, by = points[(i + 1) % n]
        out.append((ax * 0.75 + bx * 0.25, ay * 0.75 + by * 0.25))
        out.append((ax * 0.25 + bx * 0.75, ay * 0.25 + by * 0.75))
    return out


def rdp(points, eps):
    if len(points) < 3:
        return points

    def perp(p, a, b):
        dx, dy = b[0] - a[0], b[1] - a[1]
        if dx == 0 and dy == 0:
            return ((p[0] - a[0]) ** 2 + (p[1] - a[1]) ** 2) ** 0.5
        t = max(0.0, min(1.0, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy)))
        return ((p[0] - a[0] - t * dx) ** 2 + (p[1] - a[1] - t * dy) ** 2) ** 0.5

    keep = [False] * len(points)
    keep[0] = keep[-1] = True
    stack = [(0, len(points) - 1)]
    while stack:
        lo, hi = stack.pop()
        if hi - lo < 2:
            continue
        idx, best = -1, eps
        for i in range(lo + 1, hi):
            d = perp(points[i], points[lo], points[hi])
            if d > best:
                idx, best = i, d
        if idx != -1:
            keep[idx] = True
            stack += [(lo, idx), (idx, hi)]
    return [p for p, k in zip(points, keep) if k]


def to_path(loops, eps):
    parts = []
    for loop in loops:
        pts = rdp(chaikin(loop), eps)
        if len(pts) >= 3:
            parts.append("M" + " L".join(f"{x:.2f} {y:.2f}" for x, y in pts) + "Z")
    return "".join(parts)


def mask_of(comp, w, h):
    m = [[False] * w for _ in range(h)]
    for x, y in comp["pts"]:
        m[y][x] = True
    return m


# --- label grouping --------------------------------------------------------
def text_lines(glyphs):
    """Group letter components into horizontal runs of text."""
    lines = []
    for g in sorted(glyphs, key=lambda c: (round(c["cy"] / 4), c["cx"])):
        placed = False
        for ln in lines:
            if abs(ln["cy"] - g["cy"]) <= 4 and g["x0"] - ln["x1"] <= 14 and g["x0"] >= ln["x0"] - 14:
                ln["x0"] = min(ln["x0"], g["x0"])
                ln["x1"] = max(ln["x1"], g["x1"])
                ln["y0"] = min(ln["y0"], g["y0"])
                ln["y1"] = max(ln["y1"], g["y1"])
                ln["n"] += 1
                ln["cy"] = (ln["y0"] + ln["y1"]) / 2
                placed = True
                break
        if not placed:
            lines.append({"x0": g["x0"], "x1": g["x1"], "y0": g["y0"], "y1": g["y1"], "cy": g["cy"], "n": 1})
    # Merged route dots can imitate a very short run, so require a word's worth of glyphs.
    return [ln for ln in lines if ln["n"] >= 4 and ln["x1"] - ln["x0"] >= 30]


def group_blocks(lines):
    """Stack wrapped lines (the UAE label runs to two) into one block per market."""
    blocks = []
    for ln in sorted(lines, key=lambda l: l["y0"]):
        height = ln["y1"] - ln["y0"] + 1
        for blk in blocks:
            last = blk["lines"][-1]
            overlap = min(last["x1"], ln["x1"]) - max(last["x0"], ln["x0"])
            if overlap > 0.4 * min(last["x1"] - last["x0"], ln["x1"] - ln["x0"]) and \
               0 <= ln["y0"] - last["y1"] <= height * 2.2:
                blk["lines"].append(ln)
                break
        else:
            blocks.append({"lines": [ln]})
    for blk in blocks:
        xs = [l["x0"] for l in blk["lines"]] + [l["x1"] for l in blk["lines"]]
        ys = [l["y0"] for l in blk["lines"]] + [l["y1"] for l in blk["lines"]]
        blk["cx"] = (min(xs) + max(xs)) / 2
        blk["cy"] = (min(ys) + max(ys)) / 2
    return blocks


def match_blocks(blocks, pins):
    """One label per pin: pick the pairing with the smallest total distance."""
    from itertools import permutations

    best, best_cost = None, float("inf")
    for perm in permutations(range(len(blocks))):
        cost = sum(
            (blocks[b]["cx"] - p["cx"]) ** 2 + (blocks[b]["cy"] - p["cy"]) ** 2
            for b, p in zip(perm, pins)
        )
        if cost < best_cost:
            best, best_cost = perm, cost
    return best


def split_words(text, parts):
    """Spread a label's words across the number of lines the artwork used."""
    words = text.split()
    if parts == 1 or len(words) < parts:
        return [text]
    cut = max(1, round(len(words) * (parts - 1) / parts))
    return [" ".join(words[:cut]), " ".join(words[cut:])]


# --- route fitting ---------------------------------------------------------
def bezier_points(p0, p1, p2, p3, ts):
    t = ts[:, None]
    return ((1 - t) ** 3 * p0 + 3 * (1 - t) ** 2 * t * p1 + 3 * (1 - t) * t**2 * p2 + t**3 * p3)


def fit_bezier(points, p0, p3, iterations=4):
    """Least-squares cubic with fixed ends; re-parameterised against the curve each pass."""
    pts = np.asarray(points, dtype=float)
    d = p3 - p0
    denom = float(d @ d) or 1.0
    t = np.clip((pts - p0) @ d / denom, 0.0, 1.0)
    p1, p2 = p0 + d / 3.0, p0 + 2.0 * d / 3.0
    for _ in range(iterations):
        b1 = (3 * (1 - t) ** 2 * t)[:, None]
        b2 = (3 * (1 - t) * t**2)[:, None]
        base = ((1 - t) ** 3)[:, None] * p0 + (t**3)[:, None] * p3
        a = np.hstack([b1, b2])
        sol, *_ = np.linalg.lstsq(a, pts - base, rcond=None)
        p1, p2 = sol[0], sol[1]
        sample = np.linspace(0, 1, 200)
        curve = bezier_points(p0, p1, p2, p3, sample)
        t = sample[np.argmin(((pts[:, None, :] - curve[None, :, :]) ** 2).sum(-1), axis=1)]
    return p1, p2


def measure_dash(curves, mask, w, h):
    """Read the dot size and spacing straight off the artwork by walking the fitted curves."""
    runs_on, runs_off = [], []
    for p0, p1, p2, p3 in curves:
        ts = np.linspace(0.0, 1.0, 4000)
        pts = bezier_points(p0, p1, p2, p3, ts)
        seg = np.linalg.norm(np.diff(pts, axis=0), axis=1)
        hit = [
            0 <= int(round(x)) < w and 0 <= int(round(y)) < h and mask[int(round(y))][int(round(x))]
            for x, y in pts
        ]
        run, state = 0.0, hit[0]
        for i, on in enumerate(hit[1:]):
            run += seg[i]
            if on != state:
                (runs_on if state else runs_off).append(run)
                run, state = 0.0, on
    # Drop the long gaps where a curve passes under India or a label.
    on = float(np.median(runs_on)) if runs_on else 3.0
    short = [g for g in runs_off if g < on * 6] or runs_off
    off = float(np.median(short)) if short else on
    return on, on + off


def trim_curve(p0, p1, p2, p3, centre, radius):
    """Stop the route at the edge of the marker; otherwise a dot shows through the pin's hole."""
    ts = np.linspace(0.0, 1.0, 400)
    pts = bezier_points(p0, p1, p2, p3, ts)
    outside = np.flatnonzero(np.linalg.norm(pts - centre, axis=1) >= radius)
    if len(outside) == 0:
        return p0, p1, p2, p3
    t = float(ts[outside[-1]])
    if t >= 0.999:
        return p0, p1, p2, p3
    # De Casteljau: keep the segment from 0 to t.
    a = p0 + (p1 - p0) * t
    b = p1 + (p2 - p1) * t
    c = p2 + (p3 - p2) * t
    d = a + (b - a) * t
    e = b + (c - b) * t
    return p0, a, d, d + (e - d) * t


def find_arc(dots, p0, p3, tol):
    """Each route is a smooth bow between India and a pin, so sweep the bow and keep the best fit.

    Chaining dot to dot is fragile here: neighbouring dots touch and merge, and the western arcs
    leave India within a few degrees of each other. A one-parameter sweep sidesteps both.
    """
    mid = (p0 + p3) / 2.0
    span = p3 - p0
    length = float(np.linalg.norm(span)) or 1.0
    normal = np.array([-span[1], span[0]]) / length
    ts = np.linspace(0.0, 1.0, 200)

    def score(bow):
        ctrl = mid + normal * bow
        curve = ((1 - ts) ** 2)[:, None] * p0 + (2 * (1 - ts) * ts)[:, None] * ctrl + (ts**2)[:, None] * p3
        d = np.sqrt(((dots[:, None, :] - curve[None, :, :]) ** 2).sum(-1)).min(axis=1)
        return np.flatnonzero(d <= tol)

    # A quadratic only reaches half its control offset, so the sweep has to run well past the chord.
    best_inliers, best_bow = [], 0.0
    for bow in np.linspace(-2.0, 2.0, 81) * length:
        found = score(bow)
        if len(found) > len(best_inliers):
            best_inliers, best_bow = found, bow
    for bow in np.linspace(best_bow - 0.05 * length, best_bow + 0.05 * length, 21):
        found = score(bow)
        if len(found) > len(best_inliers):
            best_inliers, best_bow = found, bow
    return best_inliers, best_bow


def main() -> None:
    if len(sys.argv) < 2:
        raise SystemExit(__doc__)
    src = Path(sys.argv[1])
    rgba = to_rgba(Image.open(src))
    box = rgba.getbbox()
    if box is None:
        raise SystemExit("source has no visible artwork")
    art_im = rgba.crop(box)
    w, h = art_im.size

    land_mask, art_mask, route_mask = build_masks(art_im)
    comps = components(art_mask, w, h)
    if not comps:
        raise SystemExit("no purple artwork found")

    india = max(comps, key=lambda c: c["area"])
    rest = [c for c in comps if c is not india]
    pins = sorted(
        (c for c in rest if c["area"] >= 300 and c["bh"] >= 25 and 0.4 < c["bw"] / c["bh"] < 1.1),
        key=lambda c: c["cx"],
    )
    if len(pins) != 5:
        raise SystemExit(f"expected 5 pins, found {len(pins)}")

    glyphs = [
        c for c in rest
        if c not in pins and 7 <= c["bh"] <= 14 and c["area"] >= 12
        and c["area"] / (c["bw"] * c["bh"]) > 0.34
    ]
    lines = text_lines(glyphs)
    if len(lines) != 6:  # five markets, with the UAE label wrapping to two lines
        raise SystemExit(f"expected 6 label lines, found {len(lines)}")

    # Whatever is left after India, the pins and the label glyphs is route.
    route_only = subtract(route_mask, [india] + pins + glyphs, w, h, pad=2)
    route_px = np.array([(x, y) for y in range(h) for x in range(w) if route_only[y][x]], dtype=float)
    if len(route_px) < 200:
        raise SystemExit(f"expected route pixels, found {len(route_px)}")

    # Pins are the anchor for every other measurement, so name them by position.
    order = ["uk", "pt", "uae", "zm", "sg"]
    by_x = sorted(pins, key=lambda c: c["cx"])
    pin_map = {
        "uk": by_x[1], "pt": by_x[0], "uae": by_x[3], "zm": by_x[2], "sg": by_x[4],
    }
    # UK sits above Portugal; Zambia below UAE. Disambiguate the two western pins by height.
    if pin_map["uk"]["cy"] > pin_map["pt"]["cy"]:
        pin_map["uk"], pin_map["pt"] = pin_map["pt"], pin_map["uk"]

    solid_land = restore_land_under_art(land_mask, route_mask, w, h, reach=26)
    land_d = to_path(all_contours(solid_land, w, h), LAND_EPS)
    india_d = to_path(all_contours(mask_of(india, w, h), w, h), INDIA_EPS)

    hub = np.array([india["cx"], india["cy"]], dtype=float)
    sample = route_px if len(route_px) <= 1400 else route_px[:: len(route_px) // 1400 + 1]
    routes, curves = [], []
    for key in order:
        pin = pin_map[key]
        # Routes run behind the pin, which is drawn over them, so they end at its centre.
        tip = np.array([pin["cx"], pin["cy"]], dtype=float)
        # Arcs overlap where they converge on India, so each is fitted against the full set.
        chosen, _ = find_arc(sample, hub, tip, 3.0)
        if len(chosen) < 30:
            raise SystemExit(f"route {key}: only {len(chosen)} pixels matched")
        p1, p2 = fit_bezier(sample[chosen], hub, tip)
        curves.append((hub, p1, p2, tip))
        q0, q1, q2, q3 = trim_curve(hub, p1, p2, tip, tip, pin["bw"] * 0.55)
        routes.append(
            "M{:.2f} {:.2f} C{:.2f} {:.2f} {:.2f} {:.2f} {:.2f} {:.2f}".format(
                q0[0], q0[1], q1[0], q1[1], q2[0], q2[1], q3[0], q3[1]
            )
        )
        print(f"  route {key}: {len(chosen)} px")

    dot_w, step = measure_dash(curves, route_only, w, h)

    # Labels: one <text> per line, locked to the width the artwork used.
    blocks = group_blocks(lines)
    if len(blocks) != 5:
        raise SystemExit(f"expected 5 label blocks, found {len(blocks)}")
    assignment = match_blocks(blocks, [pin_map[k] for k in order])

    label_els = []
    for slot, key in enumerate(order):
        mine = blocks[assignment[slot]]["lines"]
        texts = split_words(LABELS[key], len(mine))
        for ln, txt in zip(mine, texts):
            size = (ln["y1"] - ln["y0"] + 1) / CAP_RATIO
            label_els.append(
                f'    <text x="{ln["x0"]:.2f}" y="{ln["y1"] + 1:.2f}" '
                f'font-size="{size:.2f}" textLength="{ln["x1"] - ln["x0"] + 1:.2f}" '
                f'lengthAdjust="spacingAndGlyphs">{txt}</text>'
            )

    # One marker size for all five: a route dot touching a pin inflates that pin's own bounds.
    pin_w = float(np.median([p["bw"] for p in pins]))
    pin_h = float(np.median([p["bh"] for p in pins]))
    pin_els = []
    for key in order:
        pin = pin_map[key]
        pin_els.append(
            f'    <use href="#pin" transform="translate({pin["cx"] - pin_w / 2:.2f} {pin["y0"]:.2f}) '
            f'scale({pin_w / PIN_VIEW_W:.4f} {pin_h / PIN_VIEW_H:.4f})"/>'
        )

    svg = f"""<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}"
     role="img"
     aria-label="Melange offices in India, United Kingdom, Portugal, United Arab Emirates, Singapore, and Zambia">
  <defs>
    <path id="pin" d="{PIN_PATH}"/>
  </defs>
  <path id="land" fill="{LAND_COLOR}" fill-rule="evenodd" d="{land_d}"/>
  <g id="routes" fill="none" stroke="{ART_COLOR}" stroke-width="{dot_w:.2f}"
     stroke-linecap="round" stroke-dasharray="0.001 {step:.2f}">
{chr(10).join(f'    <path d="{d}"/>' for d in routes)}
  </g>
  <path id="india" fill="{ART_COLOR}" fill-rule="evenodd" d="{india_d}"/>
  <g id="pins" fill="{ART_COLOR}" fill-rule="evenodd">
{chr(10).join(pin_els)}
  </g>
  <g id="labels" fill="{ART_COLOR}" font-family="{LABEL_FONT}" font-weight="700">
{chr(10).join(label_els)}
  </g>
</svg>
"""
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(svg, encoding="utf-8")
    print(f"art {w}x{h}  dot {dot_w:.1f}px  spacing {step:.1f}px  routes {len(routes)}  labels {len(label_els)}")
    print(f"wrote {OUT} ({len(svg) / 1024:.0f} KB)")


if __name__ == "__main__":
    main()
