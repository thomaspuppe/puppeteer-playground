const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://blog.thomaspuppe.de');

  const elementCount = await page.evaluate(() => {
    const selectorList = ['h1', 'h2', 'main', 'footer a'];
    const resultObj = {};
    for (let selector of selectorList) {
      resultObj[selector] = document.querySelectorAll(selector).length;
    }
    return resultObj;
  });

  console.log('Element Count:', elementCount);

  await browser.close();
})();