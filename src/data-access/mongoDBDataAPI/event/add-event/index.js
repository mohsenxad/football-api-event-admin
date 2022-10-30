const buildTranslateAddEventResponse = require('./src/translate-add-event-response');
const buildCreateAddEventRequest = require('./src/create-add-event-request');
const buildAddEvent = require('./src/add-event');

module.exports = function(
    APPID,
    APIKEY,
    proxyAgent,
    fetch
)
    {
        const translateAddEventResponse = buildTranslateAddEventResponse();
        const createAddEventRequest = buildCreateAddEventRequest(
            APIKEY,
            proxyAgent
        );
        const addEvent = buildAddEvent(
            APPID,
            fetch,
            createAddEventRequest,
            translateAddEventResponse
        );

        return Object.freeze(
            {
                addEvent
            }
        )
    }