#!/bin/bash
set -e

# Config
MAIN="main"
OUT_DIR="output"

# Create output dir
mkdir -p "$OUT_DIR"

echo "==> Running pdflatex (pass 1)..."
pdflatex -interaction=nonstopmode -halt-on-error -output-directory="$OUT_DIR" "$MAIN.tex"

echo "==> Running bibtex..."
bibtex "$OUT_DIR/$MAIN" || true

echo "==> Running pdflatex (pass 2)..."
pdflatex -interaction=nonstopmode -halt-on-error -output-directory="$OUT_DIR" "$MAIN.tex"

echo "==> Running pdflatex (pass 3 - resolving refs)..."
pdflatex -interaction=nonstopmode -halt-on-error -output-directory="$OUT_DIR" "$MAIN.tex"

echo ""
echo "Done! Output: $OUT_DIR/$MAIN.pdf"

# Copy the paper to the web application's public directory
WEB_PUBLIC_DIR="../web/public"
mkdir -p "$WEB_PUBLIC_DIR"
cp "$OUT_DIR/$MAIN.pdf" "$WEB_PUBLIC_DIR/paper.pdf"
echo "Copied paper to web directory: $WEB_PUBLIC_DIR/paper.pdf"

# Optional: open the PDF automatically
# open "$OUT_DIR/$MAIN.pdf"
