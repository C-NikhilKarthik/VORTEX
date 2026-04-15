# VORTEX Paper Build Instructions

This directory contains the LaTeX source code for the VORTEX paper. 

Follow these instructions to install the required LaTeX distribution on a Mac and build the PDF.

## 1. Install LaTeX (macOS only)

The easiest way to install a complete LaTeX distribution on a Mac is by using the [Homebrew](https://brew.sh/) package manager to install `mactex`. The full MacTeX suite includes `pdflatex`, `bibtex`, and all standard LaTeX packages, meaning you will not have to worry about missing dependencies.

Open your terminal and run:
```bash
brew install --cask mactex
```

## 2. Configure Your PATH

After installing MacTeX, your terminal needs to know where the new `pdflatex` and `bibtex` commands are located. 

You can either **restart your terminal**, or run the following command to update your paths immediately without restarting:
```bash
eval "$(/usr/libexec/path_helper)"
```

## 3. Build the Paper

Ensure you are inside the `paper/` directory, then simply run the provided build script:

```bash
./build.sh
```

### What `build.sh` does:
- Creates an `output/` directory so your source folder doesn't get cluttered with auxiliary files.
- Runs `pdflatex` to generate the initial files.
- Runs `bibtex` to link all of the citations.
- Runs `pdflatex` two more times to correctly resolve all cross-references and page numbers.

## 4. View the Output

Upon a successful build, the compiled paper will be located at:
```text
output/main.pdf
```
