'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8089 ;

const indexRouter = require('./routes/index');
const carsRouter = require('./routes/cars');
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/cars', carsRouter);

app.listen(PORT);