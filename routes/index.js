var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send( { title: 'Express' });
  res.send({ Task: 'Task NadSoft'})
});

module.exports = router;
