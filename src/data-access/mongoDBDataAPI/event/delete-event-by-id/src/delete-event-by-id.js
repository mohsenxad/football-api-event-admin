module.exports = function buildDeleteEventById
(
    APPID,
    fetch,
    createDeleteEventByIdRequest,
    translateDeleteEventByIdResponse
)
    {
        return async function deleteEventById
        (
            eventId
        )
            {
                const options = createDeleteEventByIdRequest(
                    eventId
                );

        
                const url = `https://data.mongodb-api.com/app/${APPID}/endpoint/data/v1/action/deleteOne`;
                
                const request = await fetch(
                    url,
                    options
                );
        
                const response = await request.json();

                const deleteResult = translateDeleteEventByIdResponse(
                    response
                );

                return deleteResult;
            }
    }