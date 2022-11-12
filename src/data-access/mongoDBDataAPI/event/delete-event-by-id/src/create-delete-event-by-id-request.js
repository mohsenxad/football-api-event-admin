module.exports = function buildCreateDeleteEventByIdRequest
(
    apikey,
    proxyAgent
)
    {
        return function createDeleteEventByIdRequest
        (
            eventId
        )
            {
                const query = {
                    "_id": 
                        { 
                            "$oid": eventId
                        } 
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
                        filter: query
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