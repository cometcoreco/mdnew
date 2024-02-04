// functions/redirect.js
exports.handler = async (event, context) => {
    // Get the sub1 parameter from the query string
    const sub1 = event.queryStringParameters.sub1;

    // Construct the affiliate URL with the sub1 parameter
    const affiliateUrl = `https://www.fasttrack16.com/P1B38MJ6/289SQQQ7/?sub1=${encodeURIComponent(sub1)}`;

    return {
        statusCode: 200,
        body: affiliateUrl
    };
};
