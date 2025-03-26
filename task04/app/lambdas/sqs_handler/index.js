exports.handler = async (event) => {
    // TODO implement
    console.log("SQS Event:", JSON.stringify(event, null, 2));
    const response = {
        statusCode: 200,
        body: JSON.stringify('Message processed successfully!'),
    };
    return response;
};
