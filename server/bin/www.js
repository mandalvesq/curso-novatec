// server/bin/www.js

const app = require('../app')
const cluster = require('cluster')
const numCpus = require('os').cpus().length

if (cluster.isMaster){
    for (let i = 0; i<numCpus; i++){
        cluster.fork()
    }
}else{
app.listen(3000, () => {
    console.log('server is up!!')
})
}
