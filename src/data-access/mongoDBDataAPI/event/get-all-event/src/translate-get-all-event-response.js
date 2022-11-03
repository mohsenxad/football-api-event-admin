module.exports = function buildTranslateGetAllEventResponse
()
    {
        return function translateGetAllEventResponse
        (
            response
        )
            {
                return response.documents;
            }
    }