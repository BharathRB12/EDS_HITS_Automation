const { expect } = require('@playwright/test');
const FetchReferenceNumber =require('../../utils/fetchSRN');

class ExtractSRNAndStatusValidation {
    constructor(edsPage) {
        this.edsPage = edsPage;
        this.ref=new FetchReferenceNumber(edsPage);
    }

    async extractSRNAndStatusValidation() {
        const SRN=await this.ref.getReferenceNumber("Nombor Rujukan Setem");
        return SRN;
    }
}

module.exports = ExtractSRNAndStatusValidation;