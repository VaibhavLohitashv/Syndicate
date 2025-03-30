const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_NAME;

exports.handler = async (event) => {
    try {
        // Parse the request body
        const requestBody = JSON.parse(event.body);
        
        // Validate input
        if (!requestBody.principalId || !requestBody.content) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid request body' })
            };
        }

        // Create event object
        const newEvent = {
            id: uuidv4(),
            principalId: requestBody.principalId,
            createdAt: new Date().toISOString(),
            body: requestBody.content
        };

        // Save to DynamoDB
        await dynamoDB.put({
            TableName: TABLE_NAME,
            Item: newEvent
        }).promise();

        // Return response
        return {
            statusCode: 201,
            body: JSON.stringify({
                statusCode: 201,
                event: newEvent
            })
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal server error' })
        };
    }
};