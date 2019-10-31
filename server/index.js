// global.SERVER_APP_ROOT = __dirname;
require("dotenv").config();
const PORT = process.env.PORT || 3000
const FRONTEND_DIR = process.env.FRONTEND_DIR

const bodyParser = require('body-parser')
const express = require('express')
const next = require('next')
const dev = process.env.NODE_DEV !== 'production'
const app = next({ dev, dir: FRONTEND_DIR })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    // express code here
    const server = express()
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use('/api/', require('./routes'))
    server.get('*', handle)
    server.listen(PORT, err => {
        if (err) throw err;
        console.log(`server is ready at http://localhost:${PORT}\n`)
    })
})
