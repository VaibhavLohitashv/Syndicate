exports.handler = async (event) => {
    console.log("SQS Event:", JSON.stringify(event, null, 2));
    return {
        statusCode: 200,
        body: JSON.stringify('Message processed successfully!'),
    };
};