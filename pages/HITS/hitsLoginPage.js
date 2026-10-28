const {expect} = require('@playwright/test');

class HitsLogin
{
    constructor(page)
    {
        this.page=page;
        this.loginHeader = page.getByText('Hasil Integration Tax System');
        this.userNameTxt=page.locator('#Input_UsernameVal');
        this.passwordTxt = page.locator('#Input_PasswordVal');
        this.daftarMasukbtn = page.getByRole('button', name = "Daftar Masuk");
    }
       async hitsLanch()
    {
        await this.page.goto("https://hitspre2.hasil.gov.my/HITS_AK_SUB/Login");
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('domcontentloaded');
    }

    async hitsLogin()
    {
        await expect(this.loginHeader).toBeVisible({ timeout: 30000 });
        await this.userNameTxt.fill();
        await this.passwordTxt.fill();
        await this.daftarMasukbtn.click();
    }

}