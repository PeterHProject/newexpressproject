'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/exceljs', function (req, res) {
    res.render('./exceljs.tutorial');
});

module.exports = router;
