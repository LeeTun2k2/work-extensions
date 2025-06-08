/**
 * Marks a given array of email threads as read.
 * Logs the number of emails being marked as read.
 *
 * @param {GoogleAppsScript.Gmail.GmailThread[]} emails - An array of GmailThread objects to mark as read.
 * @returns {void}
 */
const markAsRead = (emails) => {
    Logger.log(`[INFO] Mark as read for ${emails.length} emails`)
    emails.forEach(email => email.markRead());
}