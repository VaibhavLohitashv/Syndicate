const util = require('util');

/**
 * CloudWatch Log Handler for SQS messages.
 */
exports.handler = async (event) => {
    try {
        // Log the contents of each message in the SQS batch
        event.Records.forEach(record => {
            const messageBody = record.body || '';
            console.log(`SQS Message Body: ${messageBody}`);
        });

        return {
            statusCode: 200,
            body: 'SQS Message successfully logged.',
        };
    } catch (error) {
        console.error(`An error occurred while processing SQS messages: ${error.message}`);
        throw error;
    }
};