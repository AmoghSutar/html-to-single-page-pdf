# Limitations

This tool works best with static HTML documents.

## Works well

- Static HTML pages
- Inline CSS
- External CSS
- Images
- SVG graphics
- Tables
- Mathematical equations
- Documentation
- Study guides
- Reports

---

## May not work as expected

### Extremely long documents

Very large HTML documents (tens of thousands of pixels tall) may exceed the maximum page size supported by some PDF viewers.

---

### JavaScript-heavy applications

Applications that continuously modify the page after loading (React dashboards, live charts, animations, etc.) may require additional waiting before conversion.

---

### Infinite scrolling pages

Pages that dynamically load more content while scrolling cannot be captured as a single finite page.

---

### Interactive elements

Elements such as:

- Videos
- Audio
- Embedded maps
- Canvas animations
- Forms

will appear only as their rendered visual state.

---

### Browser compatibility

The generated PDF is standards-compliant, but some older PDF viewers may have difficulty displaying extremely tall pages.

Adobe Acrobat, Microsoft Edge, Chrome, and most modern PDF readers work correctly.

---

### Responsive websites

If the page changes layout based on screen size, the output depends on the viewport configured in `convert.js`.
