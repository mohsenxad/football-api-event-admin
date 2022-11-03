module.exports = function buildGetAllEvent
(
    dataAccess
)
    {
        return async function getAllEvent
        ()
            {
                const eventList = await dataAccess.dataApi.getAllEvent();
                return eventList;
            }
    }