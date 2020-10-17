const slotRepository = require('../../../infraestructure/repository/logistic/slotRepository')

exports.getSlotsAvailableFromLogistic = async () => {
    const slotsFromRepository = await slotRepository.get()
    return slotsFromRepository
}
