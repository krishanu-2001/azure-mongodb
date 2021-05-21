
module.exports = async function (context, req) {
    var responseMessage = new Date()
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}