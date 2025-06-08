/**
 * Fetches a specified maximum number of the most recent email threads from the Gmail inbox.
 * The maximum number is retrieved from script properties.
 *
 * @returns {GoogleAppsScript.Gmail.GmailThread[]} An array of fetched GmailThread objects.
 */
const fetchEmail = () => {
    // configs
    const maxFetchedEmail = getMaxFetchedEmail();

    // fetch email
    const fetchedEmails = GmailApp.getInboxThreads(0, maxFetchedEmail);
    Logger.log(`[INFO] Fetch ${fetchedEmails.length} emails`);

    return fetchedEmails;
}