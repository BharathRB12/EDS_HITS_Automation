const { expect } = require('@playwright/test');

class FirstPartyInformation {
    constructor(edsPage) {
        this.edsPage=edsPage;
        this.maklumatPihakPertamaHeader = edsPage.getByLabel('A. PIHAK PERTAMA').locator('h5');
        this.sayaCheckBox = edsPage.getByRole('checkbox', { name: 'Saya / Syarikat sebagai' });
        this.Nametextbox = edsPage.locator("input[name='StampingForm.FormAIndividualList[0].Name']")
        this.ICNoTextbox = edsPage.locator('#ICNo_0');
        this.TINNoTextbox = edsPage.locator('#step1_div_TinNo');
        this.SeterusnyaBtn = edsPage.locator("[id*='PihakPertama']").getByRole("button", { name: "Seterusnya" });
    }

    async fillFirstPartyInformation(firstPartyInformation) {
        await expect(this.maklumatPihakPertamaHeader).toContainText(firstPartyInformation.header);
        await this.sayaCheckBox.check();
        await this.SeterusnyaBtn.click();
    }
}

module.exports= FirstPartyInformation;