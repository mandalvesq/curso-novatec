// server/router/movies.js

const router = require('express').Router()
const controller = require('../controller/MovieController')

function isValidId(request, response, next){
    if (request.params.id && request.params.id.length !== 24){
        let err = new Error('Invalid ID')
        err.status = 422
        return next(err)
    }
    next()
}
router.get('/', controller.list)
router.get('/:id', isValidId, controller.byId)
router.post('/', controller.create)
router.put('/:id', isValidId, controller.update)
router.delete('/:id', isValidId, controller.delete)


module.exports = router;