const express = require('express');
var bodyParser = require('body-parser')
require('dotenv').config();

const packageJson = require('./package.json');

var app = express();
app.use(bodyParser.json())

app.use(function(req, res, next) 
    {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token, deviceid");
        next();
    }
);

const eventServices = require('./src');

app.get('/isAlive', 
    (req, res) => 
        {
            const result = {
                emoji : '🙂',
                name: packageJson.name,
                version : packageJson.version
            }
            sendResult(res, result);
        }
);

app.post('/event/add',
    async (req, res) => 
        {
            try
                {
                    const eventInfo = req.body;
                    const eventId = await eventServices.addEvent(eventInfo);
                    const result = {
                        eventId: eventId
                    };
                    sendResult(res, result);
                }
            catch (error)
                {
                    processError(res,error);
                }
            
        }
);

app.get('/event/getAll',
    async (req, res) => 
        {
            try
            {
                const eventList = await eventServices.getAllEvent();
                const result = {
                    eventList: eventList
                };
                sendResult(res, result);
            }
        catch (error)
            {
                processError(res,error);
            }
        }
)


app.post('/event/postOnTelegram',
    async (req,res) => 
        {
            try 
                {
                    const eventId = req.body.eventId;
                    if(
                        eventId
                    )
                        {
                            const postEventResult = await eventServices.postEvetOnTelegramChannel(
                                eventId
                            );
                
                            const result = {
                                postEventResult:postEventResult 
                            };
                
                            console.log(result);
                            sendResult(
                                res,
                                result
                            );
                        }
                    else
                        {
                            const InvalidParametersError = new Error("Invalid Parameters");
                            processError(
                                res,
                                InvalidParametersError
                            );
                        }   
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    );
                }
            

        }
)

function sendResult
(
    res,
    data
)
    {
        res.json(data);
    }

function processError(
    res,
    error
)
    {
        console.log(error);
        res.status(400).json(
            {
                message: error.message 
            }
        );
    }

app.listen(packageJson.port,function()
    {
        console.log('Init ' + packageJson.name + ' on ' + packageJson.port);
        console.log('Access URL : http://localhost:' + packageJson.port);
    }
);