/**
 * Extracts key information from a GmailApp email thread object.
 * This function is designed to pull out relevant details like thread ID, sender,
 * subject, full body, and a snippet for further processing or analysis.
 *
 * @param {GoogleAppsScript.Gmail.GmailThread} email - The GmailThread object to extract information from.
 * @returns {Object} An object containing extracted email details.
 * @property {string} threadId - The unique ID of the email thread.
 * @property {string} sender - The email address of the sender.
 * @property {string} subject - The subject line of the first message in the thread.
 * @property {string} body - The plain text body of the first message in the thread.
 * @property {string} snipper - A 500-character snippet of the email body.
 */
const extractEmail = (email) => {
    const messages = email.getMessages();
    const firstMessage = messages?.[0];

    const threadId = email.getId();
    const sender = firstMessage?.getFrom();
    const subject = firstMessage?.getSubject();
    const body = firstMessage?.getPlainBody();
    const snipper = body?.substring(0, 500);

    return {
        threadId,
        sender,
        subject,
        body,
        snipper
    };
}