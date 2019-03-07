const express = require('express');
const router = express.Router()
const addpg = require('../views/addPage')

router.get('/', async (req, res, next) => {
    await res.send('router.get successful')
})

router.post('/', async (req, res, next) => {
    await res.send('router.post successful')
})

router.get('/add', async (req, res, next) => {
    await res.send(addpg())
})

module.exports = router;