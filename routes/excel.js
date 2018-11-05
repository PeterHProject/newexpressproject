'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('./exceljs/overview');
});

router.get('/tutorial', function (req, res) {
    res.render('./exceljs/tutorial');
});



module.exports = router;

