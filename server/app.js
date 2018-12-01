// server/app.js

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const controller = require('./controller/AppController')


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(require('./router'))
app.use(controller.notFound)
app.use(controller.errorHandler)


module.exports = app