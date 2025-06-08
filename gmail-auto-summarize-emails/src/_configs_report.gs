/**
 * Retrieves the email address(es) designated for receiving reports from script properties.
 * This is where summaries or notifications about processed emails will be sent.
 * Throws an error if 'REPORT_TO_EMAIL' is not set, guiding the user on where to configure it.
 *
 * @returns {string} The email address(es) to send reports to.
 * @throws {Error} If 'REPORT_TO_EMAIL' is not found in script properties.
 */
const getReportToEmail = () => {
    const reportToEmail = PropertiesService.getScriptProperties().getProperty('REPORT_TO_EMAIL');
    if (!reportToEmail) {
        throw new Error('REPORT_TO_EMAIL is not set in Script Properties. Please set it in Project settings -> Script properties.');
    }
    return reportToEmail;
}
