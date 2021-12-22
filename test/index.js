const test = require('tape');
const requet = require('supertest');
const app = require('../server');
const { request } = require('../server');

test('Personal Shopper OK', function (t) {
    request(app)
    .get("/app/controllers/personal_shopper.constroller.js")
    .expect('Conten-Type', /json/)
    .expect(200)
    .end(function(err, res) {
        let expectedPS = ['Tatiana', 'Bianca'];
        t.error(err, 'No Errors');
        t.same(res.body, expectedPS, 'Personal Shoppers as expected');
        t.end();
    });
});