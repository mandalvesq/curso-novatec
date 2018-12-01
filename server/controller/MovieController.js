// server/controller/MovieController.js

const repository = require('../repository/MovieRepository')

const MovieController = {
    list(request, response, next){
        let query = {}
        if (request.query.title)
            query = { title: new RegExp(request.query.title, 'i') }

        repository.list(query, (err,data) => {
            if (err) return next(err)
            response.json(data)
        })
    },
    byId(request, response, next){},
    create(request, response, next){},
    update(request, response, next){},
    delete(request, response, next){}

}

module.exports = MovieController