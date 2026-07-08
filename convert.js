const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

(async () => {

    const browser = await puppeteer.launch({
        headless: true
    });

    // Find every HTML file in the current folder
    const htmlFiles = fs.readdirSync(".").filter(file =>
        file.toLowerCase().endsWith(".html")
    );

    if (htmlFiles.length === 0) {
        console.log("No HTML files found.");
        await browser.close();
        return;
    }

    for (const htmlFile of htmlFiles) {

        console.log(`Converting ${htmlFile}...`);

        const page = await browser.newPage();

        await page.setViewport({
            width: 1180,
            height: 1000,
            deviceScaleFactor: 1
        });

        await page.goto("file://" + path.resolve(htmlFile), {
            waitUntil: "networkidle0"
        });

        const dimensions = await page.evaluate(() => {

            const pageElement =
                document.querySelector(".page") || document.body;

            return {
                width: Math.ceil(pageElement.getBoundingClientRect().width),
                height: Math.ceil(document.documentElement.scrollHeight)
            };

        });

        const pdfName =
            path.basename(htmlFile, ".html") + ".pdf";

        await page.pdf({

            path: pdfName,

            width: `${dimensions.width}px`,
            height: `${dimensions.height}px`,

            printBackground: true,
            preferCSSPageSize: true,

            margin: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px"
            }

        });

        await page.close();

        console.log(`✓ Created ${pdfName}`);

    }

    await browser.close();

    console.log("All HTML files converted.");

})();