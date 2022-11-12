module.exports = function buildGetEventById
(
    dataAccess
)
    {
        return async function getEventById
        (
            eventId
        )
            {
                const event = await dataAccess.dataApi.getEventById(
                    eventId
                );

                return event;
            }
    }