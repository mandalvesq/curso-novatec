// server/router/movies.js

const router = require('express').Router()
const controller = require('../controller/MovieController')

router.get('/', controller.list)
//router.get('/:id', controller.byId)
//router.get('/', controller.create)
//router.get('/:id', controller.update)
//router.get('/:id', controller.delete)


module.exports = router;