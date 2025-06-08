/**
 * Retrieves the Google Gemini API key from script properties.
 * Throws an error if the 'GEMINI_API_KEY' property is not set,
 * guiding the user on where to configure it.
 *
 * @returns {string} The Google Gemini API key.
 * @throws {Error} If 'GEMINI_API_KEY' is not found in script properties.
 */
const getGeminiApiKey = () => {
  const apiKey = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not set in Script Properties. Please set it in Project settings -> Script properties.');
  }
  return apiKey;
}

/**
 * Retrieves the Google Gemini API model from script properties.
 * Throws an error if the 'GEMINI_API_MODEL' property is not set,
 * guiding the user on where to configure it.
 *
 * @returns {string} The Google Gemini API model identifier (e.g., 'gemini-pro').
 * @throws {Error} If 'GEMINI_API_MODEL' is not found in script properties.
 */
const getGeminiApiModel = () => {
  const apiModel = PropertiesService.getScriptProperties().getProperty('GEMINI_API_MODEL');
  if (!apiModel) {
    throw new Error('GEMINI_API_MODEL is not set in Script Properties. Please set it in Project settings -> Script properties.');
  }
  return apiModel;
}