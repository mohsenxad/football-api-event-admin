const models = require('../models');
module.exports = function buildAddEvent
(
    dataAccess
)
    {
        return async function addEvent
        (
            eventInfo
        )
            {

                console.log(eventInfo);
                const event = models.makeEvent(eventInfo);
                const eventId = await dataAccess.dataApi.addEvent(event);
                return eventId;
            }
    }