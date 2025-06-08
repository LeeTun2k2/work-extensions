/**
 * Retrieves the maximum number of emails to fetch from script properties.
 * This property helps control the volume of emails processed in a single run.
 * Throws an error if 'MAX_FETCHED_EMAIL' is not set, guiding the user on where to configure it.
 *
 * @returns {string} The maximum number of emails to fetch (as a string, will likely need parsing to a number).
 * @throws {Error} If 'MAX_FETCHED_EMAIL' is not found in script properties.
 */
const getMaxFetchedEmail = () => {
    const config = PropertiesService.getScriptProperties().getProperty('MAX_FETCHED_EMAIL');
    if (!config) {
        throw new Error('MAX_FETCHED_EMAIL is not set in Script Properties. Please set it in Project settings -> Script properties.');
    }
    return config;
}
