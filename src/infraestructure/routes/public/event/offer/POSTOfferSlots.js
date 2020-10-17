const offerSlots = require('../../../../../application/event/offer/offerSlots')

module.exports = ({
    router
}) => {
    router.post('/slots', async (ctx, next) => {
        ctx.body = await offerSlots.offer();
    });
};
