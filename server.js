'use strict';

const express = require('express');
const router = require('./routes');

const app = express();
const port = 8089 || process.env.PORT;

const indexRouter = require('./routes/index');

app.use(express.static('public'));

app.use('/', indexRouter);

app.listen(port);
console.log('Server up and running at ' + port);