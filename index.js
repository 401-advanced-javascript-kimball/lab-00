'use strict';

// Application Dependencies
const express = require('express');

// Environment variables
require('dotenv').config();

// Application Setup
const app = express();
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.static('./docs'));

const validator = require('./lib/validator.js');

console.log('Testing...');
console.log(validator.isValid('Test', validator.isString));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
