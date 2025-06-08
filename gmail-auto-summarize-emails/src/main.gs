/**
 * Orchestrates the daily process of fetching, analyzing, and reporting on Gmail emails.
 * This is the main function intended to be triggered periodically (e.g., daily).
 * It handles fetching new emails, filtering unread ones, analyzing them with AI,
 * sending a summary report, and finally marking processed emails as read.
 * Includes error handling for the entire process.
 *
 * @returns {void}
 */
const dailyReportGmail = () => {
  try {
    const fetchedEmails = fetchEmail();
    const unreadEmails = filterUnread(fetchedEmails);
    const analyzedData = analyzeEmails(unreadEmails);
    sendReport(analyzedData);
    markAsRead(unreadEmails);
  }
  catch (ex) {
    Logger.log(`[ERROR] ${ex}`);
  }
}