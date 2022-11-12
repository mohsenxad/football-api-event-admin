module.exports = function buildUpdateEvent
(
    APPID,
    fetch,
    createUpdateEventRequest,
    translateUpdateEventResponse
)
    {
        return async function updateEvent
        (
            eventId,
            event
        )
            {
                const options = createUpdateEventRequest(
                    eventId,
                    event
                );

                const url = `https://data.mongodb-api.com/app/${APPID}/endpoint/data/v1/action/updateOne`;
                
                const request = await fetch(
                    url,
                    options
                );
        
                const response = await request.json();

                const updateResult = translateUpdateEventResponse(
                    response
                );

                return updateResult;
            }
    }