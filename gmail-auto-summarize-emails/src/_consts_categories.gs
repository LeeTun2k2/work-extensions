/**
 * Defines a list of product categories, each with a name and a set of critical criteria
 * for that category. These criteria can be used for classification or filtering purposes.
 *
 * @type {Array<Object>}
 * @property {string} name - The name of the category (e.g., 'discount').
 * @property {Array<string>} criticals - An array of strings representing critical conditions or features
 * that define this category.
 */
const CATEGORIES = [
    {
        'name': 'Promotion',
        'criticals': [
            'at least 30%'
        ]
    },
    {
        'name': 'Billing',
        'criticals': [
            'Payment notifications, overdue payment reminders, payment required'
        ]
    }
]