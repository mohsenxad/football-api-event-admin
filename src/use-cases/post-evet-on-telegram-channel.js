module.exports = function buildPostEvetOnTelegramChannel
(
    dataAccess,
    providerServices,
    CHALNNEL_ID
)
    {
        return async function postEvetOnTelegramChannel
        (
            eventId
        )
            {
                const event = await dataAccess.dataApi.getEventById(
                    eventId  
                );

                console.log(event);

                const message = `Event is ${event.title}`
                const postToChannelResponse = await providerServices.telegramBot.sendMessage(
                    CHALNNEL_ID,
                    message,
                    {}
                )

                console.log(postToChannelResponse);

                return postToChannelResponse;

            }
    }