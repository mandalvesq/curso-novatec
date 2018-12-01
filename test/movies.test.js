// test/main.test.js

const app = require('../server/app')
const assert = require('assert')
const supertest = require('supertest')
const request = supertest(app)
const db = require('../server/config/mongo')


describe ('CRUD movies tests', () => {
    let id

    beforeEach(done => {
        let movie = { title: 'Filme teste'}
        db.collection('movies').insert(movie, (err, data) => {
            id = data._id.toString()
            done()
        })

    })
    afterEach(done => {
        db.collection('movies').remove({}, done)
    })

    it('LIST ALL', () => {
        return request.get('/api/movies')
        .then(result => {
            assert.ok(result.body.items)
            assert.ok(result.body.items.length == 1 )
            assert.ok(result.body.total)
            assert.ok(result.status, 200)
        })
    })

    it('GET', () => {
        return request.get(`/api/movies/${id}`)
        .then(result =>{
            assert.equal(result.status, 200)
            assert.ok(result.body)
            assert.equal(result.body.title, 'Filme teste')
        })
    })
    it('DELETE', () => {
        return request.delete(`/api/movies/${id}`)
        .then(result => {
            assert.equal(result.status, 204)
        })
    })
    it('PUT', () => {
        let releaseDate = { releaseDate: new Date() }
        return request.put(`/api/movies/${id}`)
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