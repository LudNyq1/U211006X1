'use strict';

const express = require('express');
const app = express();
const port = 8089 || process.env.PORT;

const indexRouter = require('./routes/index');
const carsRouter = require('./routes/cars');
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/cars', carsRouter);

app.listen(port);
console.log('Server up and running at ' + port);