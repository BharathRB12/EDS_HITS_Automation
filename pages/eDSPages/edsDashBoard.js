const { test, expect } = require('@playwright/test');

class EDSDashBoard {
  constructor(edsPage) {
    this.edsPage = edsPage;
    this.permohonan_Penyeteman = edsPage.getByText('Permohonan Penyeteman');
    this.NoticePopUp = edsPage.getByRole("heading", { name: 'Notis Penting: Nombor TIN Diperlukan' });
    this.faham = edsPage.getByRole('button', { name: 'Faham' });
    this.suratCara = edsPage.locator('#barTitle');
    this.uploadFile = edsPage.locator('#center-upload-btn_single');
    this.uploadSuccessMsg = edsPage.getByText("Muat naik berjaya!");
    this.hantarBtn = edsPage.getByRole('button', { name: 'Hantar' });
    this.aiConfirmTitle = edsPage.locator('#aiConfirmTitle');
    this.teruskanTanpaAIBtn = edsPage.getByRole('button', { name: 'Teruskan tanpa AI' });
    this.jenisPenyeteman = this.edsPage.getByRole('heading', { name: /Sila Pilih Jenis Penyeteman/ });
    this.dsForm = edsPage.locator("[data-cat='DS02']");

  }

  async navigateJenisPenyeteman() {
    await this.permohonan_Penyeteman.click();
    await expect(this.NoticePopUp).toBeVisible();
    await this.faham.click();
    await expect(this.suratCara).toBeVisible();
    await this.uploadFile.setInputFiles("C:/Users/Admin/Downloads/StampCertificate_9992657599834285.pdf");
    await expect(this.uploadSuccessMsg).toBeVisible();
    await this.hantarBtn.click();
    await expect(this.aiConfirmTitle).toBeVisible();
    await this.teruskanTanpaAIBtn.click();
    await expect(this.jenisPenyeteman).toBeVisible();
    await this.dsForm.click();
  }
}
module.exports = EDSDashBoard;