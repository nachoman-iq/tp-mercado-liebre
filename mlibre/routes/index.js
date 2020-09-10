var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Clase1. */
router.get('/Clase1', function(req, res, next) {
  res.render('Clase1', { title: 'Express' });
});

router.get('/registro', function(req, res, next) {
  res.render('registro', { title: 'Express' });
});
router.post('/registro', function(req, res, next) {  //recibe del form /registro
  res.send("Exito");
});

router.get('/loguin', function(req, res, next) {
  res.render('loguin', { title: 'Express' });
});

module.exports = router;
