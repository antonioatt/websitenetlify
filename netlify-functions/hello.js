exports.handler = async function(event, context) {
    // 'content-type': "application/json"
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello World"}),
       
    };
}