const buildTranslateSetEventChannelMessageIdResponse = require('./src/translate-set-event-channel-message-id-response');
const buildCreateSetEventChannelMessageIdRequest = require('./src/create-set-event-channel-message-id-request');
const buildSetEventChannelMessageId = require('./src/set-event-channel-message-id');

module.exports = function(
    APPID,
    APIKEY,
    proxyAgent,
    fetch
)
    {
        const translateSetEventChannelMessageIdResponse = buildTranslateSetEventChannelMessageIdResponse();
        const createSetEventChannelMessageIdRequest = buildCreateSetEventChannelMessageIdRequest(
            APIKEY,
            proxyAgent
        );
        const setEventChannelMessageId = buildSetEventChannelMessageId(
            APPID,
            fetch,
            createSetEventChannelMessageIdRequest,
            translateSetEventChannelMessageIdResponse
        );

        return Object.freeze(
            {
                setEventChannelMessageId
            }
        )
    }