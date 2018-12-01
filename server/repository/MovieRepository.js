// server/repository/MovieRepository.js

const db = require('../config/mongo')

const MovieRepository = {

    count(query, callback){
        db.collection('movies').count(query,callback)
    },

    list(query, callback){
        db.collection('movies').find(query,callback)
    },

    byId(id, callback){
        let query = { _id: db.ObjectId(id)}
        db.collection('movies').findOne(query, callback)
    },

    create(body, callback){
        db.collection('movies').insert(body,callback)
    },

    update(id, body, callback){
        let query = {_id: db.ObjectId(id)}

        db.collection('movies').update(query, {$set: body}, callback)
    },
    
    delete(id,callback){
        let query = {_id: db.ObjectId(id)}

        db.collection('movies').remove(query,callback)
    }
}

module.exports = MovieRepository