const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const PageManager = require('../pages/PageManager');
const testData = require('../test-data/ds2Data.json');

setDefaultTimeout(120 * 1000); // Cucumber timeout

Before(async function () {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    this.pageManager = new PageManager(this.page);
    this.testData = testData;
});

After(async function (scenario) {
    if (scenario.result?.status === 'FAILED') {
        const screenshot = await this.page.screenshot();
        await this.attach(screenshot, 'image/png');
    }

    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
});