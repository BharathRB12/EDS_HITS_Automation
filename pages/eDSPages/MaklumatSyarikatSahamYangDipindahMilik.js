const { expect } = require('@playwright/test');

class CompanyInformation {
    constructor(edsPage) {
        this.edsPage = edsPage;
        this.namaSyarikat = edsPage.locator("[name*='CompName']:visible");
        this.lamaNomborPendaftaranSyarikat = edsPage.locator("[name*='CompRegOld']");
        this.baruNomborPendaftaranSyarikat = edsPage.locator("[name*='CompRegNew']");
        this.aktivitiUtamaSyarikatDD = edsPage.locator("select[name*='CompActId']");
        this.alamatSyarikat = edsPage.locator("[name*='CompAddr1']");
        this.Poskod = edsPage.locator("[name*='CompPostcode']");
        this.SeterusnyaBtn = edsPage.locator("[id*='MaklumatSyarikatSahamYangDipindahMilik']").getByRole("button", { name: "Seterusnya" });
    }

    async fillCompanyInformation(companyDetails) {
        await this.namaSyarikat.fill(companyDetails.namaSyarikat);
        await this.lamaNomborPendaftaranSyarikat.fill(companyDetails.lamaNomborPendaftaranSyarikat);
        await this.baruNomborPendaftaranSyarikat.fill(companyDetails.baruNomborPendaftaranSyarikat);
        await this.aktivitiUtamaSyarikatDD.selectOption(companyDetails.aktivitiUtama);
        await this.alamatSyarikat.fill(companyDetails.alamatSyarikat);
        await this.Poskod.fill(companyDetails.poskod);
        await this.SeterusnyaBtn.click();
    }
}

module.exports = CompanyInformation;