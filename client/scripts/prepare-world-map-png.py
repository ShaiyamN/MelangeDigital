"""Crop-only export for world-map-reach.png (no gray pixel replacement).

Usage: python scripts/prepare-world-map-png.py

Reads the Figma export (1px black artboard stroke), crops it off, resizes for retina.
"""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public/destination-marketing-agency/images/world map final 2.png"
OUTS = [
    ROOT / "tourism-landing-staging/images/global/world-map-reach.png",
    ROOT / "public/destination-marketing-agency/images/global/world-map-reach.png",
]
DISPLAY_MAX = 1400
MAX_W = DISPLAY_MAX * 2
INSET = 3


def load_rgb(path: Path) -> Image.Image:
    im = Image.open(path)
    if im.mode in ("RGBA", "LA"):
        bg = Image.new("RGB", im.size, (255, 255, 255))
        bg.paste(im, mask=im.split()[-1])
        return bg
    return im.convert("RGB")


def content_bbox(im: Image.Image) -> tuple[int, int, int, int]:
    px = im.load()
    w, h = im.size
    min_x, min_y, max_x, max_y = w, h, 0, 0
    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            if r < 252 or g < 252 or b < 252:
                min_x = min(min_x, x)
                max_x = max(max_x, x)
                min_y = min(min_y, y)
                max_y = max(max_y, y)
    return min_x + INSET, min_y + INSET, max_x - INSET, max_y - INSET


def main() -> None:
    if not SOURCE.is_file():
        raise SystemExit(f"Source not found: {SOURCE}")

    im = load_rgb(SOURCE)
    left, top, right, bottom = content_bbox(im)
    im = im.crop((left, top, right + 1, bottom + 1))

    if im.width > MAX_W:
        nh = round(im.height * MAX_W / im.width)
        im = im.resize((MAX_W, nh), Image.Resampling.LANCZOS)

    for dst in OUTS:
        dst.parent.mkdir(parents=True, exist_ok=True)
        im.save(dst, optimize=True)
        print(f"{dst} {im.width}x{im.height} {dst.stat().st_size // 1024} KB")

    print(f"prepare-world-map-png: ok ({im.width}x{im.height})")


if __name__ == "__main__":
    main()
