const buildTranslateUpdateEventResponse = require('./src/translate-update-event-response');
const buildCreateUpdateEventRequest = require('./src/create-update-event-request');
const buildUpdateEvent = require('./src/update-event');

module.exports = function(
    APPID,
    APIKEY,
    proxyAgent,
    fetch
)
    {
        const translateUpdateEventResponse = buildTranslateUpdateEventResponse();
        const createUpdateEventRequest = buildCreateUpdateEventRequest(
            APIKEY,
            proxyAgent
        );
        const updateEvent = buildUpdateEvent(
            APPID,
            fetch,
            createUpdateEventRequest,
            translateUpdateEventResponse
        );

        return Object.freeze(
            {
                updateEvent
            }
        )
    }