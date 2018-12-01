// server/controller/MovieController.js
const bluebird = require('bluebird')
const repository = bluebird.promisifyAll(require('../repository/MovieRepository'))

function notFound(data) {
    if (!data){
        let err = new Error('Movie Not Found - 404')
        err.status = 404
        throw (err)
    }
    return data;
}
const MovieController = {
    list(request, response, next){
        let query = {}
        if (request.query.title)
            query = { title: new RegExp(request.query.title, 'i') }

        Promise.all([
            repository.listAsync(query),
            repository.countAsync(query)

        ])
            .then (datas => {response.json({
                items: datas[0],
                total: datas[1]
            })
        })
        
        .catch(next)
    },
    byId(request, response, next){
        let id = request.params.id
        repository.byIdAsync(id)
            .then(notFound)
            .then(data => response.json(data))
            .catch(next)
    },
    create(request, response, next){
        let body = request.body
        repository.createAsync(body)
            .then(body => response.status(201).json(body))
            .catch(next)
    },
    update(request, response, next){
        let id = request.params.id
        let body = request.body

        delete body._id;
        repository.updateAsync(id,body)
            .then(data => response.json(data))
            .catch(next)
    },
    delete(request, response, next){
        let id = request.params.id
        repository.deleteAsync(id)
            .then(id => response.status(204).send(''))
            .catch(next)
    }

}

module.exports = MovieController