const { expect } = require('@playwright/test');

class LampiranSuratCara {
    constructor(edsPage) {
        this.edsPage = edsPage;
        this.lampiranSuratCaraHeader = edsPage.locator("div[id*='LampiranSuratCara'] h5");
        this.mandatoryRows = edsPage.locator("table.documentGeneral tbody tr[data-required='true']");
        this.closeBtn = edsPage.locator('.modal.show button[data-bs-dismiss="modal"]:visible');
        this.uploadFileBtn = edsPage.locator("#btnAddFile");
        this.simpanBtn = edsPage.locator("#btnSaveUpload");
        this.seterusnyaBtn = edsPage.locator("[id*='LampiranSuratCara']").getByRole("button", { name: "Seterusnya" });
    }

    async uploadMandatoryFiles(lampiran) {
        for (let i = 0; i < await this.mandatoryRows.count(); i++) {
            const row = this.mandatoryRows.nth(i);
            const alreadyUploaded = row.getByRole('button', { name: 'Lihat Fail' });

            if (await alreadyUploaded.isVisible()) {
                await alreadyUploaded.click();
                await expect(this.edsPage.locator("#uploadFileList")).toBeVisible({ timeout: 90000 });
                await this.closeBtn.click();
                continue;
            }
            await row.getByRole('button', { name: 'Muat Naik' }).click();
            const fileChooserPromise = this.edsPage.waitForEvent('filechooser');
            await this.uploadFileBtn.click();
            const fileChooser = await fileChooserPromise;
            await fileChooser.setFiles(lampiran.filePath);
            await expect(this.edsPage.locator('.file-label')).toBeVisible({ timeout: 90000 });
            await this.simpanBtn.click();
        }
        await this.seterusnyaBtn.click();
    }
}

module.exports = LampiranSuratCara;