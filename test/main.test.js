// test/main.test.js

const app = require('../server/app')
const assert = require('assert')
const supertest = require('supertest')
const request = supertest(app)

describe('main tests', () => {
    it('should GET /', () => {
        return request
            .get('/')
            .then(result => {
                assert.equal(result.status, 200)
            })              
    })

    it ('shout GET /notFound and receive a 404', () => {
        return request
            .get('/banana')
            .then(result => {
                assert.equal(result.status, 404)
            })
    })
})