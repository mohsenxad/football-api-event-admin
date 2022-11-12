const buildTranslateDeleteEventByIdResponse = require('./src/translate-delete-event-by-id-response');
const buildCreateDeleteEventByIdRequest = require('./src/create-delete-event-by-id-request');
const buildDeleteEventById = require('./src/delete-event-by-id');

module.exports = function(
    APPID,
    APIKEY,
    proxyAgent,
    fetch
)
    {
        const translateDeleteEventByIdResponse = buildTranslateDeleteEventByIdResponse();
        const createDeleteEventByIdRequest = buildCreateDeleteEventByIdRequest(
            APIKEY,
            proxyAgent
        );
        const deleteEventById = buildDeleteEventById(
            APPID,
            fetch,
            createDeleteEventByIdRequest,
            translateDeleteEventByIdResponse
        );

        return Object.freeze(
            {
                deleteEventById
            }
        )
    }