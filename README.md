# HTML to Single-Page PDF

A lightweight Node.js utility that converts HTML files into a **single continuous PDF page** instead of splitting them into multiple A4 pages.

Unlike the browser's default **Print to PDF**, this script preserves the original layout by creating one custom-sized PDF page.

## Features

- ✅ Single-page PDF output
- ✅ Preserves HTML layout
- ✅ Preserves CSS styling
- ✅ Selectable text (vector PDF)
- ✅ High-quality images
- ✅ Background colors and images included
- ✅ Automatically converts every HTML file in the folder

---

## Requirements

- Node.js
- Puppeteer

---

## Installation

Install Puppeteer:

```bash
npm install puppeteer
```

---

## Usage

Place your HTML files and `convert.js` in the same folder.

Run:

```bash
node convert.js
```

A PDF with the same filename will be created for each HTML file.

Example:

```
chapter1.html
↓

chapter1.pdf
```

---

## Notes

This utility is designed for HTML documents such as:

- Documentation
- Study notes
- Reports
- Dashboards
- Static web pages

See **LIMITATIONS.md** for cases where a single-page PDF may not be suitable.

---

## License

MIT
