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
                // const postToChannelMessageId = await providerServices.telegramBot.sendMessage(
                //     CHALNNEL_ID,
                //     message,
                //     {}
                // )

                const postToChannelMessageId = await providerServices.telegramBot.sendPhoto(
                    CHALNNEL_ID,
                    'https://cdn.fecharge.ir/tdlte.jpg',
                    message,
                    {}
                )

                // save channelPostMessageId to database

                console.log(postToChannelMessageId);

                return postToChannelMessageId;

            }
    }