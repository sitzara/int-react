var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:num', function (req, res, next) {
    console.log('task num', req.params.num);
    res.render('task', { num: req.params.num });
});

module.exports = router;
