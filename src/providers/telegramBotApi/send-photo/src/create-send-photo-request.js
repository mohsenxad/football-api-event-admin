module.exports = function buildCreateSendPhotoRequest
(
    proxyAgent
)
    {
        return function createSendPhotoRequest
        (
            chat_id,
            photo,
            caption,
            reply_markup
        )
            {
                const headers = {
                    "content-type":"application/json"
                };
        
                const body = JSON.stringify(
                    {
                        chat_id: chat_id,
                        photo:photo,
                        caption: caption,
                        //reply_markup: reply_markup
                    }
                )

        
                var options= {
                    method:"POST",
                    headers: headers,
                    body: body
                };
        
        
                if(proxyAgent){
                    options.agent = proxyAgent;
                }
        
                return options;
            }
    }