module.exports = function buildCreateUpdateEventRequest
(
    apikey,
    proxyAgent
)
    {
        return function createUpdateEventRequest
        (
            eventId,
            event
        )
            {
                const query = {
                    "_id": 
                        { 
                            "$oid": eventId
                        } 
                };
    
                const update = {
                    "$set": event.toBson()
                };
    
                const headers = {
                    "api-key": apikey,
                    "content-type":"application/json"
                };
    
                const body = JSON.stringify(
                    {
                        collection:"events",
                        database:"Football",
                        dataSource:"FootballDB",
                        filter: query,
                        update: update
                    }
                );
    
                var options = {
                    method:"POST",
                    headers: headers,
                    body: body
                };
    
                if(proxyAgent){
                    options.agent = proxyAgent;
                }
        
        
                return options;
            }
    }