const eventServices = require('./use-cases')(
    {
        MONGODB_DATAAPI_APPID: process.env.MONGODB_DATAAPI_APPID,
        MONGODB_DATAAPI_APIKEY: process.env.MONGODB_DATAAPI_APIKEY
    },
    process.env.PROXY_URL,
    {
        CHALNNEL_ID :process.env.CHALNNEL_ID,
        BOT_TOKEN :process.env.BOT_TOKEN
    },
    process.env.FOOBTALL_STORAGE_URL
);

module.exports = eventServices;