const buildAddEvent = require('./add-event');
const buildGetAllEvent = require('./get-all-event');
const buildPostEvetOnTelegramChannel = require('./post-evet-on-telegram-channel');

module.exports = function(
    {
        MONGODB_DATAAPI_APPID,
        MONGODB_DATAAPI_APIKEY
    },
    proxyUrl,
    {
        CHALNNEL_ID,
        BOT_TOKEN
    }
)
    {
        const dataAccess = require('../data-access')(
            {
                MONGODB_DATAAPI_APPID,
                MONGODB_DATAAPI_APIKEY
            },
            proxyUrl
        );

        const providerServices = require('../providers')(
            BOT_TOKEN
        )

        const addEvent = buildAddEvent(dataAccess);
        const getAllEvent = buildGetAllEvent(dataAccess);
        const postEvetOnTelegramChannel = buildPostEvetOnTelegramChannel(
            dataAccess,
            providerServices,
            CHALNNEL_ID
        );

        const services =  Object.freeze(
            {
                addEvent,
                getAllEvent,
                postEvetOnTelegramChannel
            }
        );

        return services;
    }