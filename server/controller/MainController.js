// server/controller/MainController.js

const MainController = {
    
    home(request, response, next){
        response.send('Curso Novatec')
    },

    contact(request, response, next){
        response.send('Pagina de Contato')
    }
}


module.exports = MainController