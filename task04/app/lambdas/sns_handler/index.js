const util = require('util');

/**
 * CloudWatch Log Handler for SNS messages.
 */
exports.handler = async (event) => {
    try {
        // Log the contents of SNS messages
        event.Records.forEach(record => {
            const snsMessage = record.Sns.Message || '';
            console.log(`SNS Message Content: ${snsMessage}`);
        });

        return {
            statusCode: 200,
            body: 'SNS Message successfully logged.',
        };
    } catch (error) {
        console.error(`An error occurred while processing SNS messages: ${error.message}`);
        throw error;
    }
};