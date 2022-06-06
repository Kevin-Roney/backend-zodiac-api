const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { zodiacs } = require('../data/zodiacs');

describe('backend-zodiac-api routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/zodiacs responds with a list of zodiacs', async () => {
    const res = await request(app).get('/zodiacs');
    const expected = zodiacs.map(zodiac => {
      return { name: zodiac.name, dates: zodiac.dates, symbol: zodiac.symbol };
    });
    expect(res.body).toEqual(expected);
  });

  it('/zodiacs/:id responds with a single zodiac', async () => {
    const res = await request(app).get('/zodiacs/1');
    const aquarius = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
    };
    expect(res.body).toEqual(aquarius);
  });

  afterAll(() => {
    pool.end();
  });
});
