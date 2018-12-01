// test/main.test.js

const app = require('../server/app')
const assert = require('assert')
const supertest = require('supertest')
const request = supertest(app)

describe ('CRUD movies tests', () => {
    it('GET /api/movies shoud list all', () => {
        return request.get('/api/movies')
        .then(result => {
            assert.ok(result.body.items)
            assert.ok(result.body.items.length > 1 )
            assert.ok(result.body.total)
            assert.ok(result.status, 200)
        })
    })

    it('GET', () => {
        return request.get('/api/movies/5c02b71a6e3b40122dfa84cc')
        .then(result =>{
            assert.equal(result.status, 200)
            assert.ok(result.body)
            assert.equal(result.body.title, 'Lost')
        })
    })
    it('DELETE', () => {
        return request.delete('/api/movies/5c02b71a6e3b40122dfa84ce')
        .then(result => {
            assert.equal(result.status, 204)
        })
    })
    it('PUT', () => {
        let releaseDate = { releaseDate: '2018-01-12' }
        return request.put('/api/movies/5c02d06842558d417f40b789')
        .send(releaseDate)
        .then(result => {
            assert.equal(result.status, 200)
        })
     
    })
    it('POST', () => {
        let movie = { title: 'Movie Test' }
        return request.post('/api/movies/')
        .send(movie)
        .then(result => {
            assert.equal(result.status, 201)
            assert.ok(result.body)
            assert.ok(result.body._id)

        })
    })

})