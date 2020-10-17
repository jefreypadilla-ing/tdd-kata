const request = require('supertest');
const server = require('../../../../index.js');

beforeAll(async () => {
    console.log('Jest starting!');
});

afterAll(() => {
    server.close();
    console.log('server closed!');
});

describe('basic route tests', () => {
    test('get home route GET /', async () => {
        const response = await request(server).get('/heythere');
        expect(response.status).toEqual(200);
    });
});
