const pdfParse = require("pdf-parse");

class FetchReferenceNumber {
    constructor(edsPage) {
        this.edsPage = edsPage;
        this.slipURL = edsPage.locator("embed");
    }

    async getReferenceNumber(label, endLabel = "Tarikh") {
        const pdfUrl = await this.slipURL.getAttribute('src');

        if (!pdfUrl) {
            throw new Error('PDF URL not found in embed src');
        }
        const fullUrl = pdfUrl.startsWith('http')
            ? pdfUrl
            : `https://eds-uat.hasil.gov.my${pdfUrl}`;

        const response = await this.edsPage.request.get(fullUrl);
        const buffer = await response.body();
        const data = await pdfParse(buffer);
        const text = data.text;
        const srn = text.split(label)[1].split(endLabel)[0].trim();
        console.log("SRN:", srn);
        return srn;
    }
}
module.exports = FetchReferenceNumber;