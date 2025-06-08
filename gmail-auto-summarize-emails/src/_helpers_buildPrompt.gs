/**
 * Constructs the prompt string for the Gemini API, designed to categorize,
 * evaluate importance, and summarize emails based on predefined categories and criteria.
 *
 * @param {string} subject - The subject line of the email.
 * @param {string} snipperBody - A snippet (partial body) of the email content.
 * @returns {string} The formatted prompt string ready to be sent to the Gemini API.
 */
function buildPrompt(subject, snipperBody) {
    const categories = getCategories()
    const categoriesJson = JSON.stringify(categories, null, 2);

    const prompt = `You are an email assistant. Categorize, evaluate importance, and summarize emails.
  
  Categories and their critical criteria:
  ${categoriesJson}
  
  Instructions:
  1. Categorize the email:
     - If it matches a category and meets any critical criteria → "important".
     - If it matches a category but meets none → "not important".
     - If no match → category = "others", importance = "not important".
  2. Summary:
     - If "important" → summarize in ≤10 words.
     - Else → summary = null.
  
  Output format (JSON):
  {
    "category": "<category_name>",
    "importance": "important" | "not important",
    "summary": "<summary or null>"
  }
  
  Input:
  subject: "${subject}"
  snipperBody: "${snipperBody}"
  `;

    //Logger.log(`[DEBUG] Built Prompt: ${prompt}`)
    return prompt;
}
