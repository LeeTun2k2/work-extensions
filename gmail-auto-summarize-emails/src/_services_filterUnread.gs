/**
 * Filters a list of email threads, returning only those that are currently unread.
 * Logs the count of unread emails found.
 *
 * @param {GoogleAppsScript.Gmail.GmailThread[]} emails - An array of GmailThread objects to filter.
 * @returns {GoogleAppsScript.Gmail.GmailThread[]} An array containing only the unread email threads.
 */
const filterUnread = (emails) => {
    const unreads = emails.filter(email => email.isUnread());
    Logger.log(`[INFO] Have ${unreads.length} unread emails`);
    return unreads;
}