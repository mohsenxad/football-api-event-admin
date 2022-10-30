module.exports = function buildAddEvent
(
    APPID,
    fetch,
    createAddEventRequest,
    translateAddEventResponse
)
    {
        return async function addEvent
        (
            event
        )
            {
                const options = createAddEventRequest(
                    event
                );

                console.log(options);
        
                const url = `https://data.mongodb-api.com/app/${APPID}/endpoint/data/v1/action/insertOne`;
                
                const request = await fetch(
                    url,
                    options
                );
        
                const response = await request.json();

                const eventId = translateAddEventResponse(response);

                return eventId;
            }
    }