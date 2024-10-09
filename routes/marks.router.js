var express = require('express');
var router = express.Router();
const marksControllers=require('../controllers/marks.controllers');//3
/* GET users listing. */
router.post('/add',marksControllers.Add);
router.post('/update/:id',marksControllers.update); // pass id of record to update marks and subject

module.exports = router;
