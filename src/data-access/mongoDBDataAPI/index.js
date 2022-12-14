var fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent');

module.exports  = function
(
    APPID,
    APIKEY,
    proxyUrl
)
    {

        if(!APPID){
            throw new Error("MongoDB Data Api must have an APPID");
        }

        if(!APIKEY){
            throw new Error("MongoDB Data Api must have an APIKEY");
        }

        let proxyAgent = undefined;
        if(proxyUrl){
            proxyAgent = new HttpsProxyAgent(proxyUrl);
        }

        
        const { addEvent } = require('./event/add-event')
        (
            APPID,
            APIKEY,
            proxyAgent,
            fetch
        );

        const { updateEvent } = require('./event/update-event')
        (
            APPID,
            APIKEY,
            proxyAgent,
            fetch
        );

        
        const { deleteEventById } = require('./event/delete-event-by-id')
        (
            APPID,
            APIKEY,
            proxyAgent,
            fetch
        );


        

        const { getAllEvent } = require('./event/get-all-event')
        (
            APPID,
            APIKEY,
            proxyAgent,
            fetch
        )

        

        

        const { getEventById } = require('./event/get-event-by-id')
        (
            APPID,
            APIKEY,
            proxyAgent,
            fetch
        )

        const { setEventChannelMessageId } = require('./event/set-event-channel-message-id')
        (
            APPID,
            APIKEY,
            proxyAgent,
            fetch
        )
        

        return Object.freeze(
            {
                addEvent,
                updateEvent,
                deleteEventById,
                getAllEvent,
                getEventById,
                setEventChannelMessageId
            }
        );

    }