const { expect } = require('@playwright/test');
class Declaration {
    constructor(edsPage) {
        this.edsPage = edsPage;
        this.dutiAkanDibayarOleh = edsPage.getByRole('radio', { name: 'Pihak Pertama', exact: true });
        this.declarationCheckbox = edsPage.getByRole('checkbox', { name: 'Saya seperti nama dan Nombor' });
        this.HantarBtn = edsPage.getByRole('button', { name: "Hantar" });
        this.popUpTitle = edsPage.getByText('Anda Pasti?');
        this.Ya_HantarBtn = edsPage.getByRole('button', { name: 'Ya, Hantar' });
    }
    async completeDeclaration() {
        await this.dutiAkanDibayarOleh.click();
        await this.declarationCheckbox.click();
        await this.HantarBtn.click();
    }
    async formSubmission() {
        await expect(this.popUpTitle).toBeVisible({ timeout: 60000 });
        await this.Ya_HantarBtn.click();
        await this.edsPage.waitForLoadState('load');
        await expect(this.edsPage).toHaveTitle('Slip Pengesahan LHDN STSDS', { timeout: 90000 });
    }
}
module.exports = Declaration;