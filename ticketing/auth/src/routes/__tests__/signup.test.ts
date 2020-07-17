import request from 'supertest';
import { app } from '../../app';

it('return a 201 on successful signup', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'password'
        })
        .expect(201);
});

it('return a 400 with an invalid email', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'invalidemail',
            password: 'password'
        })
        .expect(400);
});

it('return a 400 with an invalid password', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'p'
        })
        .expect(400);
});

it('return a 400 with missing email and password', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'invalidemail',
            password: 'p'
        })
        .expect(400);
});