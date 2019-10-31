const express = require('express')
const router = express.Router()
const userModel = require('../models/users')

router.get('/', function(req, res) {
    res.send({message: 'user page is under construction.'})
})

router.get('/all', function (req, res) {
    userModel.getUserData(-1, (data) => {
        console.log('data: ', data)
        res.send(data)
    });
})

module.exports = router