// server/controller/MainController.js
const service = require('../service/MovieService')

const MainController = {
    
    home(request, response, next){
        service.list({})
            .then(datas => {
                response.render('home', {
                    title: 'Novatec 2018',
                    items: datas[0]
                })
            })
            .catch(next)
    },

    contact(request, response, next){
        response.send('Pagina de Contato')
    }
}


module.exports = MainController