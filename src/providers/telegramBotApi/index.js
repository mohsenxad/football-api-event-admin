module.exports = function(
    BOT_TOKEN,
    proxyAgent,
    fetch
)
    {
        if(!BOT_TOKEN){
            throw new Error('Telegram Provider need to have API token');
        }

        const { sendMessage }  = require('./send-message')(
            BOT_TOKEN,
            proxyAgent,
            fetch 
        );

        
        const { sendPhoto }  = require('./send-photo')(
            BOT_TOKEN,
            proxyAgent,
            fetch 
        );

        const services = Object.freeze(
            {
                sendMessage,
                sendPhoto
            }
        )

        return services;

    }

