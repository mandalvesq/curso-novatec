// server/controller/AppControler.js

const AppControler = {
    notFound(request, response, next){
        let err = new Error('404 - Not Found')
        err.status = 404
        next(err)
    },
    errorHandler(err, request, response, next){
        console.log(err.stack)
        response.status(err.status || 500)
        response.json({err: err.message})
    }
}

module.exports = AppControler