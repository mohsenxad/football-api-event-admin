module.exports = function buildTranslateAddEventResponse
()
    {
        return function translateAddEventResponse
        (
            response
        )
            {
                return response.insertedId;
            }
    }