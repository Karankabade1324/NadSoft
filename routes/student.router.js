var express = require('express');
var router = express.Router();
const { body, validationResult } = require('express-validator');
const studentControllers = require('../controllers/student.controllers');//3

/* GET users listing. */
router.post('/all', studentControllers.getAll);
router.post('/create', [body("Name").notEmpty().withMessage("Name field is requird").isAlpha().withMessage("Name must be in char only"),
body("Email").notEmpty().withMessage("Email field is requird").isEmail().withMessage("Enter Valid email"),
body("Mobile").notEmpty().withMessage("Mobile field is requird").isNumeric().withMessage("Enter Valid Mobile").isLength({min:10,max:12})
], studentControllers.create);
router.post('/update/:id', studentControllers.update);
router.post('/find/:id', studentControllers.find);
router.post('/delete/:id', studentControllers.delete);

module.exports = router;
