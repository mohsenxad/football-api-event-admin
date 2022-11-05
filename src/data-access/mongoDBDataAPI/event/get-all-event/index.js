const buildTranslateGetAllEventResponse = require('./src/translate-get-all-event-response');
const buildCreateGetAllEventRequest = require('./src/create-get-all-event-request');
const buildGetAllEvent = require('./src/get-all-event');

module.exports = function(
    APPID,
    APIKEY,
    proxyAgent,
    fetch
)
    {
        const translateGetAllEventResponse = buildTranslateGetAllEventResponse();
        const createGetAllEventRequest = buildCreateGetAllEventRequest(
            APIKEY,
            proxyAgent
        );
        const getAllEvent = buildGetAllEvent(
            APPID,
            fetch,
            createGetAllEventRequest,
            translateGetAllEventResponse
        );

        return Object.freeze(
            {
                getAllEvent
            }
        )
    }