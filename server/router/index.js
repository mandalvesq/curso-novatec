// server/router/index.js

const router = require('express').Router()
const controller = require('../controller/MainController')

router.get('/', controller.home)
router.get('/contato', controller.contact)


router.use('/api/movies/', require('./movies'))

module.exports = router;
