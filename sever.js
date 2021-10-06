'use strict';

const express = require('express');
const app = express();
const port = 8089 || process.env.PORT;

const indexRouter = require('./routes/index');

app.use(express.static('public'));

app.use('/', indexRouter);