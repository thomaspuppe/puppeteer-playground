const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setRequestInterception(true);
    page.on('request', request => {
      
        //console.log(Object.keys(request));
      
        if (request.resourceType() === 'image')
            request.abort();
        else
            request.continue();
      });

    page.on('response', response => {  
        // console.log(Object.keys(response));
        console.log(response.request().resourceType() + ' with status ' + response.status());
        if (response.request().resourceType() === 'stylesheet') {
            const responseHeaders = response.headers()
            // console.log(Object.keys(responseHeaders)) ;
            console.log(response.url() + ' has cache-control "' + responseHeaders['cache-control'] + '"');
        }
    });

    await page.goto('https://blog.thomaspuppe.de');

    const response = await page.goto('https://example.org/');
    const responseHeaders  = response.headers();
    console.log(Object.keys(responseHeaders)) ;

    console.log(responseHeaders['x-cache']) ;
    console.log(responseHeaders['cache-control']) ;

    await browser.close();
})();