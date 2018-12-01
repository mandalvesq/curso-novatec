// server/repository/MovieRepository.js

const db = require('../config/mongo')

const MovieRepository = {
    list(query, callback){
        db.collection('movies').find(query,callback)
    },
    byId(){},
    create(){},
    update(){},
    delete(){}
}

module.exports = MovieRepository