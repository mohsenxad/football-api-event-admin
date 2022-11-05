module.exports = function buildSendPhoto
(
    BOT_TOKEN,
    fetch,
    createSendPhotoRequest,
    translateSendPhotoResponse
)
    {
        return async function sendPhoto
        (
            chat_id,
            photo,
            caption,
            reply_markup
        )
            {
                const options = createSendPhotoRequest(
                    chat_id,
                    photo,
                    caption,
                    reply_markup
                );

                console.log(options);

        
                const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`;
                
                console.log(url);
                
                const request = await fetch(
                    url,
                    options
                );
        
                const response = await request.json();

                console.log(response);

                const sendMessageResponse = translateSendPhotoResponse(response);

                return sendMessageResponse;
            }        
    }