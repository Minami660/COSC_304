var express = require('express');
var router = express.Router();

var title = 'Express';

/* GET home page. */
// Do SQL Queries here
// 
router.get('/', function(req, res, next) {
  res.render('home', {
     title: title,
     data: 'fish',
     name: 'minami'
    });
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout', { title: title });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: title });
});

router.get('/product', function(req, res, next) {
  res.render('product', { title: title });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: title });
});


module.exports = router;
