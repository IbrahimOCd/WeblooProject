#!/bin/sh
# Builds index.html, fr/index.html, ar/index.html, app.css, app.js, sitemap.xml, robots.txt and llms.txt
# from src/index.html. Run tools/optimize_images.py first if you add or change photos.
cd "$(dirname "$0")" && python3 tools/build.py
