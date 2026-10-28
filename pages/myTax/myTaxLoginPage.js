const { expect } = require('@playwright/test');

class MyTaxLogin
{
    constructor(page)
    {
        this.page=page;
        this.loginHeader = page.getByText('Sila Masukkan Maklumat Anda');
        this.idTypeDropdown = page.locator("select[ng-model='idType']");
        this.IDNumberTextbox=page.getByPlaceholder("No. Pengenalan ");
        this.HantarBtn=page.getByRole('button', {name : "Hantar  "});
        this.passwordPageheader=page.getByText('STSDS UAT ONE');
        this.passwordTextbox = page.getByPlaceholder('Sila Masukkan Kata Laluan');
        this.loginBtn = page.getByRole('button', {name : 'Log Masuk  '})
        this.myTaxDashboard = page.getByText(" Maklumat Cukai Anda ");
        this.Perkhidmatan_ezHasil=page.getByText(" Perkhidmatan ezHasil ");
        this.DutiSetem=page.getByText("Duti Setem 2.0 (UAT) ");
        this.EDutiSetem=page.getByText(" e-Duti Setem ");
    }
    async goto()
    {
        await this.page.goto("https://mytax-dev.hasil.gov.my/");
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('domcontentloaded');
    }
    async loginToMytax(user)
    {
        await expect(this.loginHeader).toBeVisible({ timeout: 90000 });
        await this.idTypeDropdown.selectOption(user.idType);
        await this.IDNumberTextbox.fill(user.idNumber);
        await this.HantarBtn.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.passwordPageheader).toBeVisible({ timeout: 90000 });
        await this.passwordTextbox.fill(user.password);
        await this.loginBtn.click();
        await expect(this.myTaxDashboard).toBeVisible({ timeout: 90000 });
    }
}

module.exports = MyTaxLogin;