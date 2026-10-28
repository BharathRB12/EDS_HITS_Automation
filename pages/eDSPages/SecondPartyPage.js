const { expect } = require('@playwright/test');
class secondPartyInformation {
    constructor(edsPage) {
        this.edsPage=edsPage;
        this.maklumatPihakKeduaHeader = edsPage.getByLabel('B. PIHAK KEDUA').locator('h5');
        this.RoleRadioBtn = edsPage.getByRole('radio', { name: "Individu" });
        this.NameTextbox = edsPage.locator("#step2_div_Name input");
        this.StatusDropdown = edsPage.locator('#IsCitizen_0');
        this.ICNumberTextbox = edsPage.locator("[name*='IcNo']:visible");
        this.TINNumberTextbox = edsPage.locator("[name*='TinNo']:visible");
        this.TeleNumber = edsPage.locator("[name*='TelNo']:visible");
        this.Email = edsPage.locator("[name*='Email']:visible");
        this.Address = edsPage.locator("[name*='Addr1']:visible");
        this.PostCode = edsPage.locator("[name*='Postcode']:visible");
        this.SeterusnyaBtn = edsPage.locator("[id*='PihakKedua']").getByRole("button", { name: "Seterusnya" });
    }

    async fillSecondParty(secondPartyInformation) {
        await expect(this.maklumatPihakKeduaHeader).toContainText(secondPartyInformation.header);
        await this.RoleRadioBtn.check();
        await this.NameTextbox.fill(secondPartyInformation.spName);
        await this.StatusDropdown.selectOption(secondPartyInformation.spStatus);
        await this.ICNumberTextbox.fill(secondPartyInformation.spICNo);
        await this.TeleNumber.fill(secondPartyInformation.spTelePhoneNo);
        await this.Email.fill(secondPartyInformation.spEmail);
        await this.Address.fill(secondPartyInformation.spAddress);
        await this.PostCode.fill(secondPartyInformation.spPost);
        await this.SeterusnyaBtn.click();
    }
}

module.exports = secondPartyInformation;