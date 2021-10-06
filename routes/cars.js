const express = require('express');
const router = express.Router();

var cars_Controller = require('../controllers/carsController');

router.get('/', cars_Controller.carsList);

module.exports = router;