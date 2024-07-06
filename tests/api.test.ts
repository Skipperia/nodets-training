import request from 'supertest';
import express from 'express';
import router from '../src/routes/somerouter';

const app = express();
app.use(router);

describe('Route tests', () => {
    it('should return shalom', async () => {
        const response = await request(app).get('/getPath');
        expect(response.status).toBe(200);
        expect(response.text).toEqual("shalom");
    });
});
