const request = require('supertest');
const app = require('../app');

describe('Testing Application API Routes', () => {
  test('Root route should return info message', () => request(app).get('/').then((response) => {
    expect(response.text).toBe('Hai, I am CourseBooks Search Engine API. Use My Services from api/find');
    expect(response.statusCode).toBe(200);
  }));

  test('api/find should return 200 status', () => request(app).get('/api/find/summaries/pra/4').then((response) => {
    const { body } = response;
    expect(response.statusCode).toBe(200);
    expect(Number(body.size)).toBe(4);
  }));

  test('api/find should return response of 3 items', () => request(app).get('/api/find/summaries/practicing/3').then((response) => {
    const { body } = response;
    expect(Number(body.size)).toBe(body.data.length);
  }));

  test('/api/queries/all should return 200 status', () => request(app).get('/api/queries/all').then((response) => {
    expect(response.statusCode).toBe(200);
  }));

  test('/api/queries/all should return response of 4 items', () => request(app).get('/api/queries/all').then((response) => {
    const { body } = response;
    expect(Number(body.data.length)).toBe(55);
  }));
});
