#!/usr/bin/env python3
"""
Simple script to generate favicons from img/logo.png
Produces:
 - img/favicon-16.png
 - img/favicon-32.png
 - img/apple-touch-icon.png (180x180)
 - img/favicon.ico (multi-size ICO)

Usage: python scripts/generate_favicons_from_logo.py
"""
from PIL import Image
import os

LOGO = os.path.join('img', 'logo.png')
OUT_DIR = 'img'

PNG_SIZES = {
    'favicon-16.png': (16, 16),
    'favicon-32.png': (32, 32),
    'apple-touch-icon.png': (180, 180)
}
ICO_SIZES = [(16,16),(32,32),(48,48),(64,64),(128,128)]


def ensure_out_dir():
    if not os.path.isdir(OUT_DIR):
        os.makedirs(OUT_DIR, exist_ok=True)


def main():
    ensure_out_dir()
    if not os.path.isfile(LOGO):
        print(f"ERROR: source logo not found at {LOGO}")
        raise SystemExit(2)

    try:
        im = Image.open(LOGO).convert('RGBA')
    except Exception as e:
        print('ERROR: failed to open logo:', e)
        raise

    # Create PNG variants
    for name, size in PNG_SIZES.items():
        out_path = os.path.join(OUT_DIR, name)
        try:
            resized = im.resize(size, Image.LANCZOS)
            # Ensure background is preserved for favicons (flatten on white if no alpha)
            if resized.mode in ('RGBA', 'LA'):
                # If transparent, composite on white background to avoid fully transparent icon in some browsers
                background = Image.new('RGBA', size, (255,255,255,0))
                background.paste(resized, (0,0), resized)
                background.save(out_path, format='PNG', optimize=True)
            else:
                resized.save(out_path, format='PNG', optimize=True)
            print('Wrote', out_path)
        except Exception as e:
            print('ERROR writing', out_path, e)

    # Create multi-size ICO
    ico_path = os.path.join(OUT_DIR, 'favicon.ico')
    try:
        # Pillow will accept sizes argument to build ICO
        im.save(ico_path, format='ICO', sizes=ICO_SIZES)
        print('Wrote', ico_path)
    except Exception as e:
        print('ERROR writing', ico_path, e)

    print('Done. Review the generated files in', OUT_DIR)

if __name__ == '__main__':
    main()
