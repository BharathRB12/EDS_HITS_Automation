const { expect } = require('@playwright/test');

class GeneralInformation {
    constructor(edsPage) {
        this.edsPage = edsPage;
        this.pageHeader = edsPage.getByRole('button', { name: 'Jenis Penyeteman : DS 2: Pindah Milik Saham' });
        //general Information
        this.namaSuratCara = edsPage.locator("[name*='stampingData.DocTitle']");
        this.tarikhSuratCara = edsPage.locator(".flatpickr-input:visible:not([disabled])");
        this.seterusnyaBtn = edsPage.locator("[id*='MaklumatAM']").getByRole("button", { name: "Seterusnya" });

    }

    async fillGeneralInformation(generalInformation) {
        await expect(this.pageHeader).toBeVisible({ timeout: 90000 });
        await this.namaSuratCara.fill(generalInformation.namaSuratCara);
        await this.tarikhSuratCara.fill(generalInformation.tarikhSuratCara);
        await this.seterusnyaBtn.click();
    }
}
module.exports = GeneralInformation;