// server/config/mongojs

const mongojs = require('mongojs')
const db = mongojs('localhost/cinemark')

db.on('error', (err) => {
    console.log('caiuuu:', err)
})

module.exports = db