var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('user_rendelesei', { title: 'Rendeleseim' });
});

module.exports = router;
