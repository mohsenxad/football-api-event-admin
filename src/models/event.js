module.exports = function builMakeEvent
()
    {
        return function makeEvent
        (
            {
                registerDate = Date.now(),
                title,
                description,
                startDateTime,
                endDateTime,
                isActive = false,
                tagList,
                channelMessageId,
                telegramGroupId,
                telegramGroupInviteLink,
            }
        )
            {

                if (!title) {
                    throw new Error('Event must have Title.')
                }

                if (!startDateTime) {
                    throw new Error('Event must have Start Date Time.')
                }

                if (!endDateTime) {
                    throw new Error('Event must have End Date Time.')
                }

                return Object.freeze(
                    {
                        getRegisterDate: () => registerDate,
                        getTitle: () => title,
                        getDescription: () => description,
                        getStartDateTime: () => startDateTime,
                        getEndDateTime: () => endDateTime,
                        getIsActive: () => isActive,
                        getTagList: () => tagList,
                        getChannelMessageId: ()=> channelMessageId,
                        getTelegramGroupId: () => telegramGroupId,
                        getTelegramGroupInviteLink: () => telegramGroupInviteLink,
                        toBson: toBson,
                    }
                );

                function toBson(){
                    return {
                        registerDate : {
                            "$date": {
                                "$numberLong": registerDate.toString()
                                }
                        },
                        title: title,
                        description: description,
                        startDateTime : {
                            "$date": {
                                "$numberLong": startDateTime.toString()
                                }
                        },
                        endDateTime : {
                            "$date": {
                                "$numberLong": endDateTime.toString()
                                }
                        },
                        isActive: isActive,
                        channelMessageId:channelMessageId,
                        telegramGroupId: telegramGroupId,
                        telegramGroupInviteLink: telegramGroupInviteLink,
                    }
                }

            }
    }