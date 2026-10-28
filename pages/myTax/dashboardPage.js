const {test, expect}=require('@playwright/test');
class DashBoardPage
{
    constructor(page)
    {
        this.page=page;
        this.PemberitahuanMyTax=page.getByText('Pemberitahuan MyTax');
        this.Okbtn=page.getByRole('button', {name:'Ok'})
        this.Perkhidmatan_ezHasil=page.getByText('Perkhidmatan ezHasil');
        this.DutiSetem_UAT=page.getByText("Duti Setem 2.0 (UAT)");
        this. eDutiSetem =page.getByRole('link', {name: 'e-Duti Setem'});
    }

    async navigateEDS()
    {
        await expect(this.PemberitahuanMyTax).toBeVisible();
        await this.Okbtn.click();
        await this.Perkhidmatan_ezHasil.click();
        await this.DutiSetem_UAT.click();
        const [edsPage]=await Promise.all([
            this.page.context().waitForEvent('page'),
            this.eDutiSetem.click()
        ]);
        
        await edsPage.waitForLoadState();

        return edsPage;
    }
}

module.exports =DashBoardPage;