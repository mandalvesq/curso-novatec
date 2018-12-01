// server/repository/MovieRepository.js

const db = require('../config/mongo')

const MovieRepository = {
    list(query, callback){
        db.collection('movies').find(query,callback)
    },
    byId(id, callback){
        let query = { _id: db.ObjectId(id)}
        db.collection('movies').findOne(query, callback)
    },
    create(){},
    update(){},
    delete(){}
}

module.exports = MovieRepository