const { expect } = require('@playwright/test');

class PermitExemption {
    constructor(edsPage) {
        this.edsPage = edsPage;
        this.permohonanPeremitanPengecualian = this.edsPage.getByRole('radio', { name: 'Tiada' });
        this.peremitanPengecualianDD = this.edsPage.locator("input#ExemptionTypeInput");
        this.peremitanPengecualianOption = this.edsPage.locator('#ExemptionTypeList').getByText('DS 02 - Peremitan #2');
        this.seterusnyaBtn = this.edsPage.locator("[id*='PeremitanPengecualian']").getByRole("button", { name: "Seterusnya" });
    }
    async fillPermitExemption(exemptionTiada) {
        if (exemptionTiada.permohonanPeremitanPengecualian === "Tiada") {
            await this.permohonanPeremitanPengecualian.click();
            await this.seterusnyaBtn.click();
        }
        else if (permohonanPeremitanPengecualian === "Ada")
        {
            await this.permohonanPeremitanPengecualian.click();
            await this.peremitanPengecualianDD.click();
            await this.peremitanPengecualianOption.click();
            await this.seterusnyaBtn.click();
        }
    }
}

module.exports = PermitExemption;