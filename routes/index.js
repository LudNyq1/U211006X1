const express = require('express');
const router = express.Router();

//Locates index
var index_controller = require('../controllers/indexController');

//Get home page
router.get('/', index_controller.index);

module.exports = router;