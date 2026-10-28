const { Given, When, Then } = require('@cucumber/cucumber');
const testData = require('../../test-data/ds2Data.json');
const { expect } = require('@playwright/test');

Given('taxpayer login to EDS', async function () {

    const loginPage = this.pageManager.getLoginPage();
    await loginPage.goto();
    await loginPage.loginToMytax(this.testData.validUser);
});

When('taxpayer creates a DS2 application', async function () {
    const edsPage = await this.pageManager.getDashboardPage().navigateEDS();
    this.pageManager.switchPage(edsPage);
    const page = this.pageManager.getEDSDashboardPage();
    await page.navigateJenisPenyeteman();
});

When('taxpayer completes General Information', async function () {
    const page = this.pageManager.getGeneralInformationPage();
    await page.fillGeneralInformation(this.testData.generalInformation);
});

When('taxpayer completes First Party Information', async function () {
    const page = this.pageManager.getFirstPartyPage();
    await page.fillFirstPartyInformation(this.testData.firstPartyInformation);
});

When('taxpayer completes Second Party Information', async function () {

    const page = this.pageManager.getSecondPartyPage();
    await page.fillSecondParty(this.testData.secondPartyInformation);
});

When('taxpayer completes Instruction Letter Information', async function () {
    const page = this.pageManager.getMaklumatSuratCaraPage();
    await page.fillShareInformation(this.testData.shareInformation);
});

When('taxpayer completes Joint Stock Company Information', async function () {

    const page = this.pageManager.getMaklumatSyarikatSahamYangDipindahMilikPage();
    await page.fillCompanyInformation(this.testData.companyDetails);
});

When('taxpayer completes Remission Information', async function () {
    const page = this.pageManager.getPeremitanPengecualianPage();
    await page.fillPermitExemption(this.testData.exemptionTiada);
});

When('taxpayer uploads required attachments', async function () {
    const page = this.pageManager.getLampiranSuratCaraPage();
    await page.uploadMandatoryFiles(this.testData.lampiran);
});

When('taxpayer completes Certification', async function () {
    const page = this.pageManager.getDeclarationPage();
    await page.completeDeclaration(this.testData.declaration);
});

When('taxpayer submits the application', async function () {
    const page = this.pageManager.getDeclarationPage();
    await page.formSubmission();
});

Then('SRN number should be generated', async function () {
    const extractPage = this.pageManager.getExtractSRNAndStatusValidation();
    const SRN = await extractPage.extractSRNAndStatusValidation();
    this.SRN = SRN;
    expect(SRN).toBeDefined();
});

