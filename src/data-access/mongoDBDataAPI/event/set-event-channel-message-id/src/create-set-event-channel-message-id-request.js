module.exports = function buildCreateSetEventChannelMessageIdRequest
(
    apikey,
    proxyAgent
)
    {
        return function createSetEventChannelMessageIdRequest
        (
            eventId,
            channelMessageId
        )
            {
                const query = {
                    "_id": 
                        { 
                            "$oid": eventId
                        } 
                };
    
                const update = {
                    "$set": {
                        channelMessageId: channelMessageId
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