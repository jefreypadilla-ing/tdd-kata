const offerSlots = require('../../../../src/application/event/offer/offerSlots')

const sinon = require('sinon')

afterEach(() => {
    sinon.restore()
})

describe('getSlots unit test', () => {
    test('should return slots', async () => {
        sinon.stub(getSlots, 'getSlotsAvailableFromLogistic').returns([{ id: 1 },  { id: 2 }])

        const slots = await offerSlots.offer()

        expect(slots).toEqual([{ id: 1 },  { id: 2 }]);
    });
});
