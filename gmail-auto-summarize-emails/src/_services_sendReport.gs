/**
 * Generates and sends an email report summarizing important emails based on analyzed data.
 * The report includes categories and summaries of emails marked as "important."
 * If no important emails are found, no report is sent.
 *
 * @param {Array<Object>} analyzedData - An array of analyzed email objects,
 * each potentially containing 'category', 'importance', and 'summary' properties.
 * @returns {void}
 */
const sendReport = (analyzedData) => {
    const today = new Date();
    const toEmail = getReportToEmail();

    const importances = analyzedData.filter(x => x.importance === "important");
    if (importances.length === 0) {
        Logger.log(`[INFO] ${today.toISOString()} has no email report`);
        return;
    }

    // Group summaries by category
    const categoryMap = {};
    importances.forEach(item => {
        if (!categoryMap[item.category]) {
            categoryMap[item.category] = [];
        }
        if (item.summary) {
            categoryMap[item.category].push(item.summary);
        }
    });

    const reportSubject = `Report: ${today.toISOString()} has ${importances.length} important emails`;

    let reportBody = `
      <p>Hi,</p>
      <p>Today I have some news for you:</p>
      <ol>
    `;

    for (const [category, summaries] of Object.entries(categoryMap)) {
        reportBody += `<li><strong>${category}</strong><ul>`;
        summaries.forEach(summary => {
            reportBody += `<li>${summary}</li>`;
        });
        reportBody += `</ul></li>`;
    }

    reportBody += `
      </ol>
      <p>Best regards,<br>Your Email Assistant</p>
    `;

    // Assuming you have a sendEmail function
    sendEmail(toEmail, reportSubject, reportBody);
};
