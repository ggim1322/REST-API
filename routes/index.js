var express = require('express');
var router = express.Router();

var message = '';
var secondPart = '';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hi!', message: message });
});

router.get('/hello', function (req, res) {
  res.send('Hello World!');
});

router.post('/', function (req, res) {
  secondPart = req.body.name;
  message = 'Hi ' + secondPart + '!';
  res.send({message: message});
});

router.get('/?', function(req, res, next) {
  res.render('index', { title: 'Hi!', message: message });
  res.send({message: message});
});

module.exports = router;
