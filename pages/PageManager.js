const myTaxLoginPage = require('./myTax/myTaxLoginPage');
const myTaxDashBoard = require('./myTax/dashboardPage');

const EDSDashBoardPage = require('./eDSPages/edsDashBoard');
const GeneralInformationPage = require('./eDSPages/GeneralInformationPage');
const FirstPartyPage = require('./eDSPages/FirstPartyPage');
const SecondPartyPage = require('./eDSPages/SecondPartyPage');
const MaklumatSuratCaraPage = require('./eDSPages/MaklumatSuratCaraPage');
const MaklumatSyarikatSahamYangDipindahMilikPage = require('./eDSPages/MaklumatSyarikatSahamYangDipindahMilik');
const PermitExemption = require('./eDSPages/Peremitan_Pengecualian');
const LampiranSuratCaraPage = require('./eDSPages/LampiranSuratCaraPage');
const DeclarationPage = require('./eDSPages/DeclarationPage');
const ExtractSRNAndStatusValidation=require("./eDSPages/ExtractSRNAndStatusValidation");


class PageManager {

    constructor(page) {
        this.page = page;
    }
    // switch from MyTax tab to EDS tab
    switchPage(page) {
        this.page = page;

        // clear old page objects
        this.edsDashboardPage = undefined;
        this.generalInformationPage = undefined;
        this.firstPartyPage = undefined;
        this.secondPartyPage = undefined;
        this.maklumatSuratCaraPage = undefined;
        this.maklumatSyarikatSahamYangDipindahMilikPage = undefined;
        this.peremitanPengecualianPage = undefined;
        this.lampiranSuratCaraPage = undefined;
        this.declarationPage = undefined;
        this.ExtractAndStatusValidation =undefined;
    }

    getLoginPage() {
        return this.loginPage ||= new myTaxLoginPage(this.page);
    }
    getDashboardPage() {
        return this.dashboardPage ||= new myTaxDashBoard(this.page);
    }
    getEDSDashboardPage() {
        return this.edsDashboardPage ||= new EDSDashBoardPage(this.page);
    }
    getGeneralInformationPage() {
        return this.generalInformationPage ||=
            new GeneralInformationPage(this.page);
    }
    getFirstPartyPage() {
        return this.firstPartyPage ||=
            new FirstPartyPage(this.page);
    }
    getSecondPartyPage() {
        return this.secondPartyPage ||=
            new SecondPartyPage(this.page);
    }
    getMaklumatSuratCaraPage() {
        return this.maklumatSuratCaraPage ||=
            new MaklumatSuratCaraPage(this.page);
    }
    getMaklumatSyarikatSahamYangDipindahMilikPage() {
        return this.maklumatSyarikatSahamYangDipindahMilikPage ||=
            new MaklumatSyarikatSahamYangDipindahMilikPage(this.page);
    }
    getPeremitanPengecualianPage() {
        return this.PermitExemption ||=
            new PermitExemption(this.page);
    }
    getLampiranSuratCaraPage() {
        return this.lampiranSuratCaraPage ||=
            new LampiranSuratCaraPage(this.page);
    }
    getDeclarationPage() {
        return this.declarationPage ||=
            new DeclarationPage(this.page);
    }
    getExtractSRNAndStatusValidation()
    {
        return this.extractAndStatusValidation ||= 
        new ExtractSRNAndStatusValidation(this.page);
    }

}
module.exports = PageManager;