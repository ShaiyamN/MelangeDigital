from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
REF = ROOT / "public/destination-marketing-agency/images/global/world-map-arc-ref.png"
OUT = ROOT / "public/destination-marketing-agency/images/global/world-map-arc.png"
OCEAN = np.array([232, 231, 236, 255], dtype=np.uint8)  # #E8E7EC
LAND = np.array([255, 255, 255, 255], dtype=np.uint8)
INDIA_FILL = np.array([91, 33, 182, 255], dtype=np.uint8)
INDIA_SEED = (520, 268)
INDIA_BOX = None
INDIA_DIST = 32
CROP_Y0, CROP_Y1 = 138, 368
OUT_W = 1600
PINS = {
    "UNITED KINGDOM": (332, 173),
    "PORTUGAL": (308, 235),
    "UNITED ARAB EMIRATES": (471, 234),
    "ZAMBIA": (395, 285),
    "SINGAPORE": (563, 315),
}
HUB = (523, 255)


def flood(mask, seed, box=None, max_dist=None):
    h, w = mask.shape
    sx, sy = seed
    if not (0 <= sx < w and 0 <= sy < h and mask[sy, sx]):
        return np.zeros_like(mask)
    x0, y0, x1, y1 = box if box else (0, 0, w, h)
    seen = np.zeros_like(mask)
    dist = np.full(mask.shape, -1, dtype=np.int16)
    q = deque([(sx, sy)])
    seen[sy, sx] = True
    dist[sy, sx] = 0
    while q:
        x, y = q.popleft()
        d = dist[y, x]
        if max_dist is not None and d >= max_dist:
            continue
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if x0 <= nx < x1 and y0 <= ny < y1 and mask[ny, nx] and not seen[ny, nx]:
                seen[ny, nx] = True
                dist[ny, nx] = d + 1
                q.append((nx, ny))
    return seen


def dilate(mask, rad=2):
    out = mask.copy()
    ys, xs = np.where(mask)
    h, w = mask.shape
    for y, x in zip(ys, xs):
        out[max(0, y - rad) : min(h, y + rad + 1), max(0, x - rad) : min(w, x + rad + 1)] = True
    return out


def inpaint(a, ink):
    h, w = ink.shape
    out = a.copy()
    remaining = ink.copy()
    known = ~ink
    for rad in range(3, 24, 3):
        ys, xs = np.where(remaining)
        if not ys.size:
            break
        for y, x in zip(ys, xs):
            y0, y1 = max(0, y - rad), min(h, y + rad + 1)
            x0, x1 = max(0, x - rad), min(w, x + rad + 1)
            keep = known[y0:y1, x0:x1]
            if not keep.any():
                continue
            out[y, x] = np.median(out[y0:y1, x0:x1][keep], axis=0)
            remaining[y, x] = False
            known[y, x] = True
    return out


def main():
    ref = np.array(Image.open(REF).convert("RGBA"))
    r = ref[:, :, 0].astype(np.int16)
    g = ref[:, :, 1].astype(np.int16)
    b = ref[:, :, 2].astype(np.int16)
    luma = 0.3 * r + 0.59 * g + 0.11 * b
    near_ocean = (np.abs(r - 229) < 14) & (np.abs(g - 228) < 14) & (np.abs(b - 226) < 14)
    near_white = luma > 248
    ink = ~(near_ocean | near_white)
    cleaned = inpaint(ref, dilate(ink, 4))
    cluma = 0.3 * cleaned[:, :, 0].astype(np.float32) + 0.59 * cleaned[:, :, 1] + 0.11 * cleaned[:, :, 2]
    land = cluma > 245
    india = dilate(flood(land, INDIA_SEED, max_dist=INDIA_DIST), 2)

    out = np.empty_like(cleaned)
    out[:] = OCEAN
    out[land] = LAND
    out[india] = INDIA_FILL

    crop = Image.fromarray(out).crop((0, CROP_Y0, ref.shape[1], CROP_Y1))
    out_h = round(OUT_W * crop.height / crop.width)
    im = crop.resize((OUT_W, out_h), Image.LANCZOS)
    scale = OUT_W / ref.shape[1]
    hx, hy = round(HUB[0] * scale), round((HUB[1] - CROP_Y0) * scale)
    im.save(OUT, "PNG")
    print(f"saved {OUT} {im.size} scale={scale:.3f}")
    print(f"viewBox 0 0 {im.size[0]} {im.size[1]}")
    print(f"hub {hx},{hy}")
    for name, (px, py) in PINS.items():
        print(f"{name} {round(px * scale)},{round((py - CROP_Y0) * scale)}")


if __name__ == "__main__":
    main()
