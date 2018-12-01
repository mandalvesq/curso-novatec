const bluebird = require('bluebird')
const repository = bluebird.promisifyAll(require('../repository/MovieRepository'))


const MovieService = {
    list(query){
        return Promise.all([
            repository.listAsync(query),
            repository.countAsync(query)

        ])
    }
}