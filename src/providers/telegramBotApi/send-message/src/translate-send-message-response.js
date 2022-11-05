module.exports = function buildTranslateSendMessageResponse
()
    {
        return function translateSendMessageResponse
        (
            response
        )
            {
                console.log(response);
                return response;
            }
    }