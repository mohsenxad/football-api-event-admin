const buildAddEvent = require('./add-event');
const buildUpdateEvent = require('./update-event');
const buildDeleteEventById = require('./delete-event-by-id');
const buildGetEventById = require('./get-event-by-id');
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
    },
    FOOBTALL_STORAGE_URL
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
        const updateEvent = buildUpdateEvent(dataAccess);
        const deleteEventById = buildDeleteEventById(dataAccess);
        const getEventById = buildGetEventById(dataAccess);
        const getAllEvent = buildGetAllEvent(dataAccess);
        const postEvetOnTelegramChannel = buildPostEvetOnTelegramChannel(
            dataAccess,
            providerServices,
            CHALNNEL_ID,
            FOOBTALL_STORAGE_URL
        );

        const services =  Object.freeze(
            {
                addEvent,
                updateEvent,
                deleteEventById,
                getEventById,
                getAllEvent,
                postEvetOnTelegramChannel
            }
        );

        return services;
    }