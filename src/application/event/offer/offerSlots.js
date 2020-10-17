const getSlots = require('../../../domain/event/logistic/getSlots')

exports.offer = async () => {
    const slots = getSlots.getSlotsAvailableFromLogistic()
    return slots
}
