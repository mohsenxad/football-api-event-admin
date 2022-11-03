const buildAddEvent = require('./add-event');
const buildGetAllEvent = require('./get-all-event');

module.exports = function(
    {
        MONGODB_DATAAPI_APPID,
        MONGODB_DATAAPI_APIKEY
    },
    proxyUrl
)
    {
        const dataAccess = require('../data-access')(
            {
                MONGODB_DATAAPI_APPID,
                MONGODB_DATAAPI_APIKEY
            },
            proxyUrl
        );

        const addEvent = buildAddEvent(dataAccess);
        const getAllEvent = buildGetAllEvent(dataAccess);
        

        const services =  Object.freeze(
            {
                addEvent,
                getAllEvent
            }
        );

        return services;
    }