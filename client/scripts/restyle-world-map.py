"""Re-cut the world map's routes, pins and labels to match a cleaner reference render.

Usage: python scripts/restyle-world-map.py scripts/world-map-reference.png

prepare-world-map.py builds the whole asset from the original black-card export. Its traced land is
good, but the arcs it fitted bow so high they run off the top of the canvas and the labels drift a
long way from their pins. The reference render draws the same five routes far more tightly.

The reference uses a different projection, so its pixel coordinates cannot be copied across: its
British Isles are ~50px right of the ones in the SVG. Pin tips are mapped with a hub-anchored
similarity transform (scale from inter-pin spacing, rotation from the UK chord), then routes and
labels are replayed against those positions. Land is left alone; only styling and pin geography
change.

India is the exception: the original trace fused it to a piece of south-east Asia and left a ring
of single-pixel specks around it, so it is redrawn from the reference and slid onto the country it
is meant to cover.
"""
import importlib.util
import math
import re
import sys
from collections import deque
from itertools import combinations
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
SVG = ROOT / "tourism-landing-staging/images/global/world-map-reach.svg"

_spec = importlib.util.spec_from_file_location("pwm", Path(__file__).with_name("prepare-world-map.py"))
pwm = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(pwm)

ART_SAT = 70    # >=50% purple coverage over white
ROUTE_SAT = 32  # >=25%, so the sparse route dots survive
ORDER = ["uk", "pt", "uae", "zm", "sg"]


def _rasterize_land(land_d, w=1002, h=392):
    mask = Image.new("L", (w, h), 0)
    draw = ImageDraw.Draw(mask)
    for part in land_d.split("M")[1:]:
        nums = re.findall(r"-?\d+\.?\d*", part.split("Z")[0])
        if len(nums) < 4:
            continue
        pts = [(float(nums[i]), float(nums[i + 1])) for i in range(0, len(nums) - 1, 2)]
        if len(pts) >= 3:
            draw.polygon(pts, fill=255)
    return np.array(mask) > 0


def portugal_coast_tip(land_d):
    """North-facing west coast of Iberia below the Bay of Biscay gap (Lisbon)."""
    land = _rasterize_land(land_d)
    candidates = []
    for x in range(148, 170):
        for y in range(156, 190):
            if land[y, x] and y > 155 and not land[y - 1, x]:
                candidates.append((x, y))
    if not candidates:
        raise SystemExit("Portugal coast missing from land raster")
    band = [p for p in candidates if 175 <= p[1] <= 182]
    pick = min(band or candidates, key=lambda p: (p[0], -p[1]))
    return np.array(pick, dtype=float)


def masks(im):
    px = im.convert("RGB").load()
    w, h = im.size
    art = [[False] * w for _ in range(h)]
    route = [[False] * w for _ in range(h)]
    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            sat = max(r, g, b) - min(r, g, b)
            if sat >= ROUTE_SAT:
                route[y][x] = True
                if sat >= ART_SAT:
                    art[y][x] = True
    return art, route


def components(mask, w, h):
    """8-connected, so anti-aliased glyph strokes stay in one piece at this size."""
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
                for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1), (1, 1), (1, -1), (-1, 1), (-1, -1)):
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < w and 0 <= ny < h and mask[ny][nx] and not seen[ny][nx]:
                        seen[ny][nx] = True
                        q.append((nx, ny))
            xs = [p[0] for p in pts]
            ys = [p[1] for p in pts]
            out.append({
                "pts": pts, "area": len(pts),
                "x0": min(xs), "x1": max(xs), "y0": min(ys), "y1": max(ys),
                "bw": max(xs) - min(xs) + 1, "bh": max(ys) - min(ys) + 1,
                "cx": sum(xs) / len(pts), "cy": sum(ys) / len(pts),
            })
    return out


def text_lines(glyphs):
    """Group letters into rows of text.

    At this size neighbouring letters touch, so a row holds only two or three components and
    prepare-world-map.py's "four glyphs to a line" rule throws every label away. Splitting a row on
    horizontal gaps does not work either: the word space in "UNITED KINGDOM" is wider than the one
    in "UNITED ARAB", so any threshold either cuts the first label in half or misses the second. No
    two labels share a row here, so a row is taken whole.
    """
    rows = []
    for g in sorted(glyphs, key=lambda c: c["cy"]):
        if rows and abs(rows[-1][-1]["cy"] - g["cy"]) <= 3:
            rows[-1].append(g)
        else:
            rows.append([g])

    out = []
    for row in rows:
        x0, x1 = min(c["x0"] for c in row), max(c["x1"] for c in row)
        y0, y1 = min(c["y0"] for c in row), max(c["y1"] for c in row)
        if x1 - x0 >= 25 and y1 - y0 >= 4:
            out.append({"x0": x0, "x1": x1, "y0": y0, "y1": y1, "cy": (y0 + y1) / 2})
    return out


def read_reference(png):
    im = Image.open(png)
    w, h = im.size
    art_mask, route_mask = masks(im)
    comps = components(art_mask, w, h)

    india = max(comps, key=lambda c: c["area"])
    rest = [c for c in comps if c is not india]
    pins = sorted(
        (c for c in rest if c["area"] >= 180 and c["bh"] >= 18 and 0.55 < c["bw"] / c["bh"] < 1.0),
        key=lambda c: c["cx"],
    )
    if len(pins) != 5:
        raise SystemExit(f"expected 5 pins in the reference, found {len(pins)}")

    # Route dots survive as 3-4px specks; a capital is 5px or more, and that gap is what keeps a
    # stray dot from stretching a label's row to the far side of the map.
    glyphs = [c for c in rest if c not in pins and 5 <= c["bh"] <= 9 and c["area"] >= 8]
    lines = text_lines(glyphs)
    if len(lines) != 6:  # five markets, with the UAE label wrapping to two lines
        raise SystemExit(f"expected 6 label lines in the reference, found {len(lines)}")

    route_only = pwm.subtract(route_mask, [india] + pins + glyphs, w, h, pad=2)
    route_px = np.array([(x, y) for y in range(h) for x in range(w) if route_only[y][x]], dtype=float)
    if len(route_px) < 200:
        raise SystemExit(f"expected route pixels in the reference, found {len(route_px)}")

    by_x = sorted(pins, key=lambda c: c["cx"])
    pin_map = {"uk": by_x[1], "pt": by_x[0], "uae": by_x[3], "zm": by_x[2], "sg": by_x[4]}
    if pin_map["uk"]["cy"] > pin_map["pt"]["cy"]:
        pin_map["uk"], pin_map["pt"] = pin_map["pt"], pin_map["uk"]

    blocks = pwm.group_blocks(lines)
    if len(blocks) != 5:
        raise SystemExit(f"expected 5 label blocks in the reference, found {len(blocks)}")
    assignment = pwm.match_blocks(blocks, [pin_map[k] for k in ORDER])
    label_map = {k: blocks[assignment[i]]["lines"] for i, k in enumerate(ORDER)}

    hub = np.array([india["cx"], india["cy"]], dtype=float)
    stop_r = (india["bw"] + india["bh"]) / 4
    ctrl, curves = {}, []
    for key in ORDER:
        pin = pin_map[key]
        tip = np.array([pin["cx"], pin["cy"]], dtype=float)
        trail = trace_arc(route_px, tip, hub, stop_r)
        if np.linalg.norm(trail[-1] - hub) > stop_r + 20:
            raise SystemExit(f"reference route {key}: trail stalled {np.linalg.norm(trail[-1] - hub):.0f}px "
                             f"from India after {len(trail)} px")
        p1, p2 = pwm.fit_bezier(trail, hub, tip)
        curves.append((hub, p1, p2, tip))
        ctrl[key] = (p1, p2)
        reached = np.linalg.norm(trail[-1] - hub)
        print(f"  reference route {key}: {len(trail)} px, stopped {reached:.0f}px from India")

    dot_w, step = pwm.measure_dash(curves, route_only, w, h)
    return {
        "hub": hub, "pins": pin_map, "ctrl": ctrl, "labels": label_map,
        "india": india, "dot": dot_w, "step": step,
        "pin_w": float(np.median([p["bw"] for p in pins])),
        "pin_h": float(np.median([p["bh"] for p in pins])),
        "tip_frac": float(np.median([(p["cy"] - p["y0"]) / p["bh"] for p in pins])),
    }


def trace_arc(dots, tip, hub, stop_r, reach=6.0, min_cos=0.3):
    """Walk an arc's pixels from its pin back towards India.

    prepare-world-map.py picks each arc by sweeping a symmetric bow between hub and pin and keeping
    whichever collects the most dots. That hands Portugal the wrong arc: a high bow rides the long
    United Kingdom sweep, takes all of its dots, and only dives to the Portugal pin at the end, so
    the two reach India as one thick line. Scoring by coverage instead does not help, because the
    impostor genuinely does pass through more dots, and no symmetric bow hugs a real arc closely
    enough for the trail around a pin to disqualify it either.

    Walking the trail sidesteps the whole problem. The arcs only come within a dot's width of each
    other where they converge on India, and the walk has already stopped by then: the buried run is
    left to the curve fit, which is anchored at the hub anyway, and is trimmed at the coast.

    This walks pixels rather than dots because at this size the dashes bleed into each other, so
    the dots do not survive as separate blobs to step between.
    """
    fallback = hub - tip
    fallback /= np.linalg.norm(fallback) or 1.0

    def walk(seed):
        # The pin sits at the end of its arc, so the line from it out to the first pixel already
        # points along the arc. Aiming at India instead misreads the arcs that leave sideways.
        opening = dots[seed] - tip
        reveal = float(np.linalg.norm(opening))
        heading = opening / reveal if reveal > 2.0 else fallback
        trail, used = [seed], {seed}
        while np.linalg.norm(dots[trail[-1]] - hub) > stop_r:
            step = dots - dots[trail[-1]]
            dist = np.linalg.norm(step, axis=1)
            ahead = lambda i: float(step[i] @ heading) / dist[i]
            near = [i for i in np.flatnonzero((dist > 0) & (dist <= reach))
                    if i not in used and ahead(i) >= min_cos]
            if near:
                nxt = max(near, key=ahead)
            else:
                # Zambia's arc passes behind the United Arab Emirates pin and label, and blanking
                # those takes bites out of it. Carry straight on to pick it up on the far side.
                jump = [i for i in np.flatnonzero((dist > reach) & (dist <= 40.0))
                        if i not in used and ahead(i) >= 0.85]
                if not jump:
                    break
                nxt = min(jump, key=lambda i: dist[i])
            heading = 0.6 * heading + 0.4 * step[nxt] / dist[nxt]
            heading /= np.linalg.norm(heading)
            used.add(nxt)
            trail.append(nxt)
        return trail

    # Leftover specks of label text sit near some pins, so the closest pixel is not always on the
    # arc. Whichever nearby pixel is really on it gives by far the longest walk.
    seeds = np.argsort(np.linalg.norm(dots - tip, axis=1))[:25]
    return dots[max((walk(int(s)) for s in seeds), key=len)]


def rebuild_india(text, ref, scale, seed):
    """Redraw India from the reference, placed by sliding it onto the shape already in the file.

    The traced original is one blob of India fused to a piece of south-east Asia, ringed by 26
    single-pixel specks. Its bounding box is therefore meaningless as an anchor, but it does still
    contain the real India, so the offset that buries the most of a clean India inside it is the
    one that lands on the country.

    Returns that offset as well as the path. Since the reference outline is carried around its own
    centroid, and the centroid of India is where the artwork gathers its arcs, the offset is also
    where this map's arcs belong, so `seed` is the hub currently in the file.

    The answer is recorded in the file and reused, because the search cannot be repeated once it
    has been applied: it would then be matching the outline it drew last time, whose smoothing has
    rounded it just enough to make some neighbouring offset score better, and the country would
    creep on every run.
    """
    from PIL import ImageDraw

    d = re.search(r'id="india"[^>]*\sd="([^"]+)"', text).group(1)
    w, h = (int(v) for v in re.search(r'viewBox="0 0 (\d+) (\d+)"', text).groups())
    subs = [s for s in d.split("M") if s.strip()]
    main = max(subs, key=len)
    nums = [float(v) for v in re.findall(r"-?\d+\.?\d*", main)]
    canvas = Image.new("1", (w, h))
    ImageDraw.Draw(canvas).polygon(list(zip(nums[0::2], nums[1::2])), fill=1)
    target = np.array(canvas, dtype=bool)

    india = ref["india"]
    centre = np.array([india["cx"], india["cy"]])
    pts = (np.array(india["pts"], dtype=float) - centre) * scale

    def coverage(off):
        q = np.rint(pts + off).astype(int)
        ok = (q[:, 0] >= 0) & (q[:, 0] < w) & (q[:, 1] >= 0) & (q[:, 1] < h)
        return int(target[q[ok, 1], q[ok, 0]].sum())

    done = re.search(r'id="india"[^>]*\sdata-hub="([-\d.]+) ([-\d.]+)"', text)
    if done:
        best_off = np.array([float(done.group(1)), float(done.group(2))])
        print(f"  india kept at ({best_off[0]:.2f}, {best_off[1]:.2f}) from the last run")
    else:
        best_off = np.array(seed, dtype=float)
        best = coverage(best_off)
        for span, step in ((40.0, 2.0), (2.0, 0.25)):
            grid = np.arange(-span, span + step / 2, step)
            base = best_off
            for dx in grid:
                for dy in grid:
                    off = base + (dx, dy)
                    got = coverage(off)
                    if got > best:
                        best, best_off = got, off
        best_off = np.round(best_off, 2)
        print(f"  india placed at ({best_off[0]:.2f}, {best_off[1]:.2f}), "
              f"{100 * best / len(pts):.1f}% inside the traced shape")

    mask = [[False] * (india["bw"] + 2) for _ in range(india["bh"] + 2)]
    for x, y in india["pts"]:
        mask[y - india["y0"] + 1][x - india["x0"] + 1] = True
    origin = np.array([india["x0"] - 1, india["y0"] - 1])
    parts = []
    for loop in pwm.all_contours(mask, india["bw"] + 2, india["bh"] + 2):
        moved = [tuple((np.array(p) + origin - centre) * scale + best_off) for p in loop]
        keep = pwm.rdp(pwm.chaikin(moved), pwm.INDIA_EPS)
        if len(keep) >= 3:
            parts.append("M" + " L".join(f"{x:.2f} {y:.2f}" for x, y in keep) + "Z")
    return "".join(parts), best_off


def read_svg_pins(text):
    """Recover where each pin points from the transform in the file.

    The point of the teardrop is the anchor, not the bounding box: this script resizes pins, and
    anchoring on the top edge would walk every marker off its country a little further on each run.
    """
    out = []
    for tx, ty, sx, sy in re.findall(
        r'<use href="#pin" transform="translate\(([-\d.]+) ([-\d.]+)\) scale\(([\d.]+) ([\d.]+)\)"/>', text
    ):
        w = float(sx) * pwm.PIN_VIEW_W
        h = float(sy) * pwm.PIN_VIEW_H
        out.append(np.array([float(tx) + w / 2, float(ty) + h]))
    return out


def main():
    if len(sys.argv) < 2:
        raise SystemExit(__doc__)
    ref = read_reference(sys.argv[1])
    text = SVG.read_text(encoding="utf-8")

    seed = np.array([float(n) for n in re.search(r'<path d="M([-\d.]+) ([-\d.]+) C', text).groups()])
    svg_pins = read_svg_pins(text)
    if len(svg_pins) != 5:
        raise SystemExit(f"expected 5 pins in the SVG, found {len(svg_pins)}")
    tip_s = dict(zip(ORDER, svg_pins))
    tip_r = {k: np.array([p["cx"], p["y0"] + p["bh"]]) for k, p in ref["pins"].items()}

    # One scale for everything that has to stay upright: how much bigger this projection draws the
    # same spread of pins. Measured between pins rather than out from the hub, because the hub is
    # about to move onto India's real centre and the scale has to be settled before that. Per-arc
    # scale is folded into the chord frame below instead.
    ratios = [
        np.linalg.norm(tip_s[a] - tip_s[b]) / np.linalg.norm(tip_r[a] - tip_r[b])
        for a, b in combinations(ORDER, 2)
    ]
    scale = float(np.median(ratios))
    print(f"scale {scale:.4f}  (pin spacings {min(ratios):.3f}-{max(ratios):.3f})")

    india_d, hub_s = rebuild_india(text, ref, scale, seed)

    ref_hub = ref["hub"]
    d_r = tip_r["uk"] - ref_hub
    d_s = tip_s["uk"] - hub_s
    th = math.atan2(d_s[1], d_s[0]) - math.atan2(d_r[1], d_r[0])
    rot = np.array([[math.cos(th), -math.sin(th)], [math.sin(th), math.cos(th)]])
    for key in ORDER:
        tip_s[key] = hub_s + scale * rot @ (tip_r[key] - ref_hub)
    land_d = re.search(r'id="land"[^>]*\sd="([^"]+)"', text).group(1)
    tip_s["pt"] = portugal_coast_tip(land_d)
    print("repositioned pins from reference")
    for key in ORDER:
        print(f"  {key}: {tip_s[key][0]:.1f},{tip_s[key][1]:.1f}")

    routes, pin_els, label_els = [], [], []
    pin_w, pin_h = ref["pin_w"] * scale, ref["pin_h"] * scale
    # Offset the pins by the size they are actually written at. Measuring against the exact size
    # instead leaves a tip that cannot be read back, so every run nudges all five a hair further.
    sx, sy = round(pin_w / pwm.PIN_VIEW_W, 4), round(pin_h / pwm.PIN_VIEW_H, 4)
    drawn_w, drawn_h = sx * pwm.PIN_VIEW_W, sy * pwm.PIN_VIEW_H
    # The reference sets every label in one size. Measured cap heights land on 6 or 7px, and taking
    # each line at face value leaves "UNITED KINGDOM" a size larger and crushed into its own width.
    caps = [ln["y1"] - ln["y0"] + 1 for lines in ref["labels"].values() for ln in lines]
    font_size = float(np.median(caps)) / pwm.CAP_RATIO * scale
    for key in ORDER:
        # Routes stop at the middle of the head and labels are offset from it, so derive that point
        # from the tip and the size about to be emitted rather than from the size being replaced.
        rp = np.array([ref["pins"][key]["cx"], ref["pins"][key]["cy"]])
        sp = tip_s[key] - np.array([0.0, (1 - ref["tip_frac"]) * pin_h])

        # Similarity taking the reference chord onto this one, so the arc keeps its exact bow.
        d_r, d_s = rp - ref["hub"], sp - hub_s
        k = np.linalg.norm(d_s) / np.linalg.norm(d_r)
        th = math.atan2(d_s[1], d_s[0]) - math.atan2(d_r[1], d_r[0])
        rot = np.array([[math.cos(th), -math.sin(th)], [math.sin(th), math.cos(th)]])
        chord = lambda p: hub_s + rot @ (p - ref["hub"]) * k

        p1, p2 = ref["ctrl"][key]
        q = pwm.trim_curve(*(chord(p) for p in (ref["hub"], p1, p2, rp)), sp, pin_w * 0.55)
        routes.append("M{:.2f} {:.2f} C{:.2f} {:.2f} {:.2f} {:.2f} {:.2f} {:.2f}".format(
            *[v for p in q for v in p]))

        pin_els.append(
            f'    <use href="#pin" transform="translate({tip_s[key][0] - drawn_w / 2:.2f} '
            f'{tip_s[key][1] - drawn_h:.2f}) scale({sx:.4f} {sy:.4f})"/>'
        )

        mine = ref["labels"][key]
        for ln, txt in zip(mine, pwm.split_words(pwm.LABELS[key], len(mine))):
            x = sp[0] + (ln["x0"] - rp[0]) * scale
            y = sp[1] + (ln["y1"] + 1 - rp[1]) * scale
            label_els.append(
                f'    <text x="{x:.2f}" y="{y:.2f}" font-size="{font_size:.2f}" '
                f'textLength="{(ln["x1"] - ln["x0"] + 1) * scale:.2f}" '
                f'lengthAdjust="spacingAndGlyphs">{txt}</text>'
            )

    dot_w, step = ref["dot"] * scale, ref["step"] * scale

    def swap(group_id, body, open_tag=None):
        nonlocal text
        pattern = re.compile(rf'(<g id="{group_id}"[^>]*?>)(.*?)(</g>)', re.S)
        new, n = pattern.subn(lambda m: (open_tag or m.group(1)) + "\n" + body + "\n  " + m.group(3), text, count=1)
        if n != 1:
            raise SystemExit(f"could not find <g id=\"{group_id}\"> in the SVG")
        text = new

    swap("routes", "\n".join(f'    <path d="{d}"/>' for d in routes),
         f'<g id="routes" fill="none" stroke="{pwm.ART_COLOR}" stroke-width="{dot_w:.2f}"\n'
         f'     stroke-linecap="round" stroke-dasharray="0.001 {step:.2f}">')
    swap("pins", "\n".join(pin_els))
    swap("labels", "\n".join(label_els))

    text = re.sub(r'(id="india"[^>]*\sd=")[^"]+(")', lambda m: m.group(1) + india_d + m.group(2), text, count=1)
    keep = f'data-hub="{hub_s[0]:.2f} {hub_s[1]:.2f}"'
    text = (re.sub(r'data-hub="[^"]*"', keep, text, count=1) if "data-hub=" in text
            else text.replace('id="india"', f'id="india" {keep}', 1))

    SVG.write_text(text, encoding="utf-8")
    print(f"dot {dot_w:.2f}px  spacing {step:.2f}px  pin {pin_w:.1f}x{pin_h:.1f}  labels {len(label_els)}")
    print(f"wrote {SVG}")


if __name__ == "__main__":
    main()
