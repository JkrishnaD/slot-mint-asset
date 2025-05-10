const puppeteer = require('puppeteer');
const path = require('path');

async function convertHtmlToPng() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Load your HTML file
    await page.goto(`file:${path.join(__dirname, '/nft.html')}`);
    
    // Set viewport size
    await page.setViewport({
        width: 1000,
        height: 1000,
        deviceScaleFactor: 2
    });
    
    // Take screenshot
    await page.screenshot({
        path: 'booking-template.png',
        fullPage: true
    });
    
    await browser.close();
}

convertHtmlToPng();