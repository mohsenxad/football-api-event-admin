module.exports = function buildDeleteEventById
(
    dataAccess
)
    {
        return async function deleteEventById
        (
            eventId
        )
            {
                //fetch event.if has channel post then remove it from channel

                const deleteResult = await dataAccess.dataApi.deleteEventById(
                    eventId
                );

                return deleteResult;

            }
    }