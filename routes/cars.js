const express = require('express');
const router = express.Router();

var cars_Controller = require('../controllers/carsController');

router.get('/', cars_Controller.index);
router.get('/:Id', cars_Controller.car_by_id);

module.exports = router;