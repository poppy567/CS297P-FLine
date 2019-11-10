const express = require('express')
const router = express.Router()
const recomModel = require('../models/recommendation.js')

router.get('/', function(req, res) {
    res.send({})
})

router.get('/get_user_score/:from-:to', function (req, res) {
    try {
        recomModel.getUserScore(req.params.from, req.params.to, (data) => {
            console.log('data: ', data)
            res.send({'data': data})
        });
    } catch (err) {
        res.status = 400;
        res.send({'msg': err.message})
    }
})

module.exports = router