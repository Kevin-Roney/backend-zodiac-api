const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-zodiac-api routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/zodiacs/:id responds with a single zodiac', async () => {
    const res = await request(app).get('/zodiacs/1');
    const aquarius = {
      id: 1,
      name: 'Aquarius',
      dates: 'jan 21 - feb 19',
      symbol: 'Water Bearer',
    };
    expect(res.body).toEqual(aquarius);
  });

  afterAll(() => {
    pool.end();
  });
});
