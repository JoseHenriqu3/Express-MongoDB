var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.send('You are so cool. Deu certo !');
});

router.get('/cool/beach', function(req, res, next) {
  res.send('Legallllllllll.');
});

router.get('/ifc', function(req, res, next) {
  res.send('Welcome to IFC - 3ºB o Melhor!');
});

module.exports = router;
