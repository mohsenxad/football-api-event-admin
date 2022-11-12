
module.exports = function buildSetEventChannelMessageId
(
    APPID,
    fetch,
    createSetEventChannelMessageIdRequest,
    translateSetEventChannelMessageId
)
    {
        return async function setEventChannelMessageId
        (
            eventId,
            channelMessageId
        )
            {
                const options = createSetEventChannelMessageIdRequest(
                    eventId,
                    channelMessageId
                );

        
                const url = `https://data.mongodb-api.com/app/${APPID}/endpoint/data/v1/action/updateOne`;
                
                const request = await fetch(
                    url,
                    options
                );
        
                const response = await request.json();

                const updateResult = translateSetEventChannelMessageId(
                    response
                );

                return updateResult;
            }
    }