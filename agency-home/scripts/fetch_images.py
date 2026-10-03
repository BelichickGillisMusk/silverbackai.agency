#!/usr/bin/env python3
"""Download the licensed source photos from Wikimedia Commons and build the
optimized site images in ../assets/img.
Requires: pip install pillow
Credits / licenses: see ../credits.html
"""
import io, os, urllib.request
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "..", "assets", "img")
UA = {"User-Agent": "SilverbackSiteBuild/1.0 (hello@silverbackai.agency)"}
BRIDGE = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Golden_Gate_Bridge_at_Sunset_from_Marin.jpg/1920px-Golden_Gate_Bridge_at_Sunset_from_Marin.jpg"
GORILLA = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/A_Silverback_Stare_%28116199513%29.jpeg/1920px-A_Silverback_Stare_%28116199513%29.jpeg"

def get(url):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA)) as r:
        return Image.open(io.BytesIO(r.read())).convert("RGB")

def resize_w(im, w):
    return im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)

def main():
    os.makedirs(OUT, exist_ok=True)
    b = get(BRIDGE)
    resize_w(b, 1600).save(os.path.join(OUT, "golden-gate-golden-hour.webp"), "WEBP", quality=78, method=6)
    resize_w(b, 800).save(os.path.join(OUT, "golden-gate-golden-hour-800.webp"), "WEBP", quality=78, method=6)
    W, H = b.size; th = round(W * 630 / 1200); top = (H - th) // 2
    b.crop((0, top, W, top + th)).resize((1200, 630), Image.LANCZOS).save(os.path.join(OUT, "og.jpg"), "JPEG", quality=80, optimize=True)
    g = get(GORILLA); W, H = g.size
    x0 = int(W * 0.30); c = g.crop((x0, 0, x0 + int(H * 0.85), H))
    resize_w(c, 900).save(os.path.join(OUT, "silverback-gorilla.webp"), "WEBP", quality=76, method=6)
    print("images built in", OUT)

if __name__ == "__main__":
    main()
