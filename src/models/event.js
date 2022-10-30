module.exports = function builMakeEvent
()
    {
        return function makeEvent
        (
            {
                registerDate = Date.now(),
                title,
                startDateTime,
                endDateTime,
                isActive = false,
                tagList
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
                        getStartDateTime: () => startDateTime,
                        getEndDateTime: () => endDateTime,
                        getIsActive: () => isActive,
                        getTagList: () => tagList,
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
                        isActive: isActive
                    }
                }

            }
    }