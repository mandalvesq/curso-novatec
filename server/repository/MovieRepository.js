// server/repository/MovieRepository.js

const MovieRepository = {
    list(query, callback){
        let data = [
            { title: 'O HOBBIT' },
            { title: 'O Senhor dos Aneis' },
            { title: 'Maquina Mortifera' },
            { title: 'Sherlock Holmes' }
        ]
        if (query.name)
            data = data.filter(i => query.name.test(i.title))
        callback(null, data)
    },
    byId(){},
    create(){},
    update(){},
    delete(){}
}

module.exports = MovieRepository