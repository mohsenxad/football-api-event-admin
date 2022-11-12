const models = require('../models');

module.exports = function buildUpdateEvent
(
    dataAccess
)
    {
        return async function updateEvent
        (
            eventId,
            eventInfo
        )
            {
                const event = models.makeEvent(eventInfo);
                const updateEventResult = await dataAccess.dataApi.updateEvent(
                    eventId,
                    event
                );

                if(
                    event.getChannelMessageId()
                )
                    {
                        //update Post On channel
                    }
                return updateEventResult;
            }
    }