module.exports = function buildGetAllEvent
(
    APPID,
    fetch,
    createGetAllEventRequest,
    translateGetAllEventResponse
)
    {
        return async function getAllEvent
        ()
            {
                const options = createGetAllEventRequest();

        
                const url = `https://data.mongodb-api.com/app/${APPID}/endpoint/data/v1/action/find`;
                
                const request = await fetch(
                    url,
                    options
                );
        
                const response = await request.json();

                const eventList = translateGetAllEventResponse(response);

                return eventList;
            }
    }