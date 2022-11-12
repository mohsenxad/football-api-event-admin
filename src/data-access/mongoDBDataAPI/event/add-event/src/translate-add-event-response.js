module.exports = function buildTranslateAddEventResponse
()
    {
        return function translateAddEventResponse
        (
            response
        )
            {
                console.log(response);
                return response.insertedId;
            }
    }