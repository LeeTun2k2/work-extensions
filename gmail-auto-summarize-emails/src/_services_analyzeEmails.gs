/**
 * Analyzes a list of email threads using the Gemini AI to categorize, determine importance,
 * and summarize each email based on predefined criteria.
 *
 * @param {GoogleAppsScript.Gmail.GmailThread[]} emails - An array of GmailThread objects to analyze.
 * @returns {Array<Object>} An array of analyzed email data, where each object contains
 * category, importance, summary, and the original thread ID.
 * Null entries (for failed analyses) are filtered out.
 */
const analyzeEmails = (emails) => {
    const analyzedData = emails.map(email => {
        // extract necessary data from email
        const extractedEmail = extractEmail(email);
        if (!extractedEmail) {
            return null;
        }

        // build gemini prompt
        const prompt = buildPrompt(extractEmail);

        // call gemini analyze ai
        const geminiResponse = requestGemini(prompt);

        // parse json
        try {
            // Strip markdown code block syntax
            const jsonStr = geminiResponse
                .replace(/```json|```/g, '') // remove ```json and ```
                .trim();

            const parsed = JSON.parse(jsonStr);
            parsed["threadId"] = extractedEmail["threadId"];
            return parsed;
        } catch (err) {
            Logger.log(`[ERROR] Failed to parse Gemini response:\n${geminiResponse}`);
            return null;
        }
    })

    return analyzedData.filter(Boolean);
}
