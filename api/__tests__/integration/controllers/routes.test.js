const request = require('supertest');
const app = require('../../../src/app');

const { MongoClient } = require('mongodb');

describe('get data from /products', () => {
  let connection;

  beforeAll(async done => {
    connection = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await connection.db();
    done();
  });

  afterAll(async done => {
    await connection.close();
    done();
  });

  it('should get all products into collection', async done => {
    const res = await request(app).get('/products');

    expect(res.status).toEqual(200);

    done();
  });

  it('should get one saved product by code value into collection', async done => {
    const res = await request(app).get('/product/7622210713780');

    expect(res).toBeTruthy();

    done();
  });

  it('should get an error, because the code wasnt available', async done => {
    const res = await request(app).get('/product/999999999');

    if (res === undefined || res.length == 0) {
      expect(res).toHaveProperty('error');
    }

    done();
  });
});
