const { expect } = require('@playwright/test');

class ShareInformation {
    constructor(edsPage) {
        this.edsPage = edsPage;
        this.sharePurchaseAgreement = edsPage.getByRole('radio', { name: 'Tiada' });
        this.jenisSaham = edsPage.getByRole('radio', { name: 'Saham Biasa' });
        this.bilanganSahamDiterbitkan = edsPage.locator("[id*='ShrTot']:visible");
        this.bilanganSahamDipindahMilik = edsPage.locator("[id*='ShrTrf']:visible");
        this.hargaBalasan = edsPage.getByRole('radio', { name: 'Ringgit Malaysia' });
        this.jumlahDalamRinggitMalaysia = edsPage.locator("[id*='CurrAmt']");
        this.statusSyarikatDD = edsPage.locator("select#statusSelect");
        this.tarikhSyarikatDitubuhkanNewCom = edsPage.locator(".js-statusNewDate");
        this.tarikhSyarikatDitubuhkanDormantCom = edsPage.locator(".js-statusDormantDate");
        this.sebabTransaksiPindahMilikDilaksanakanDD = edsPage.locator("select#transactionReason");
        this.SeterusnyaBtn = edsPage.locator("[id*='MaklumatSuratCara']").getByRole("button", { name: "Seterusnya" });
    }

    async fillShareInformation(shareInformation) {
        await this.sharePurchaseAgreement.check();
        await this.jenisSaham.check();
        await this.bilanganSahamDiterbitkan.fill(shareInformation.bilanganSahamDiterbitkan);
        await this.bilanganSahamDipindahMilik.fill(shareInformation.bilanganSahamDipindahMilik);
        if (shareInformation.harga_Balasan === "Ringgit Malaysia") {
            await this.hargaBalasan.check();
            await this.jumlahDalamRinggitMalaysia.fill(shareInformation.jumlahDalamRinggitMalaysia);
        }
        else if (hargaBalasan === "Matawang Asing") {
            await this.hargaBalasan.check();
            //need to add the elements..
        }
        if (shareInformation.statusSyarikat === "Baru ditubuhkan (Tidak Melebihi 18 Bulan)") {
            await this.statusSyarikatDD.selectOption("Baru ditubuhkan (Tidak Melebihi 18 Bulan)");
            await this.tarikhSyarikatDitubuhkanNewCom.fill(shareInformation.tarikhDitubuhkan);
        }
        else if (statusSyarikat === "Dorman / Tiada Pendapatan (Zero Revenue) / Syarikat yang memenuhi ambang kelayakan (Threshold-qualified Company)") {
            await this.statusSyarikatDD.selectOption("Dorman / Tiada Pendapatan (Zero Revenue) / Syarikat yang memenuhi ambang kelayakan (Threshold-qualified Company)");
            await this.tarikhSyarikatDitubuhkanDormantCom.fill("02/01/2026");
        }
        else if (statusSyarikat === "Syarikat Aktif. Akaun Beraudit yang Terkini diperlukan") {
            await this.statusSyarikatDD.selectOption("Syarikat Aktif. Akaun Beraudit yang Terkini diperlukan");
            //need to add some more fields
        }
        await this.sebabTransaksiPindahMilikDilaksanakanDD.selectOption(shareInformation.sebabTransaksi);
        await this.SeterusnyaBtn.click();
    }
}

module.exports = ShareInformation;