const request = require('supertest');
const server = require('../../../../../../index');

beforeAll(async () => {
    console.log('Jest starting!');
});

afterAll(() => {
    server.close();
    console.log('server closed!');
});

describe('POSTOfferSlots route tests', () => {
    test('postofferSlots route /slots', async () => {
        const response = await request(server).post('/slots');

        expect(response.status).toEqual(200);
    });
});
