/**
 * Sends an email using GmailApp.
 * Logs success or failure messages to the console.
 *
 * @param {string} toEmail - The recipient's email address.
 * @param {string} subject - The subject line of the email.
 * @param {string} body - The body content of the email.
 * @returns {void}
 */
const sendEmail = (toEmail, subject, body) => {
    try {
        GmailApp.sendEmail(toEmail, subject, body);
        Logger.log(`[INFO] Email report sent successfully to ${recipientEmail} with subject: ${subject}`);
    } catch (e) {
        Logger.log(`[INFO] Failed to send email report: ${e.message}`);
    }

    return content;
}