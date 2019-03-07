const express = require('express');
const router = express.Router();
const addpg = require('../views/addPage');
const { Page } = require("../models");


router.get('/', async (req, res, next) => {
  await res.send('router.get successful');
});

router.post('/', async (req, res, next) => {
    console.log(req.body);
    // const page = new Page({
    //     title: res.json(req.body).t
    //     content: res.json(req.body).content
    //   });
    //   // make sure we only redirect *after* our save is complete!
    //   // note: `.save` returns a promise.
    //   try {
    //     await page.save();
    //     res.redirect('/');
    //   } catch (error) { next(error) }
});

router.get('/add', async (req, res, next) => {
  await res.send(addpg());
});

module.exports = router;
