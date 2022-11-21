module.exports = function buildPostEvetOnTelegramChannel
(
    dataAccess,
    providerServices,
    CHALNNEL_ID,
    FOOBTALL_STORAGE_URL
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
                
                const howToMessage = `با ورود به گروه چالش ها، میتوانید در چالش های لحظه ای شرکت کنید و امتیاز بیشتری برای شرکت در قرعه کشی دریافت کنید.`
                const message = `${event.description}\n\n♨️برای مشاهده ی چالش ها وارد لینک زیر بشید👇\n${event.telegramGroupInviteLink}\n\n ${howToMessage}`;
                // const postToChannelMessageId = await providerServices.telegramBot.sendMessage(
                //     CHALNNEL_ID,
                //     message,
                //     {}
                // )

                const postToChannelMessageId = await providerServices.telegramBot.sendPhoto(
                    CHALNNEL_ID,
                    `${FOOBTALL_STORAGE_URL}/event?eventId=${event._id}&t=${Date.now()}`,
                    message,
                    {}
                )

                const setEventChannelMessageIdResult = await dataAccess.dataApi.setEventChannelMessageId(
                    eventId,
                    postToChannelMessageId
                )

                console.log(setEventChannelMessageIdResult);

                return setEventChannelMessageIdResult;

            }
    }