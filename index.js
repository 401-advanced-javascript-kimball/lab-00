'use strict';

const validator = require('./lib/validator.js');

console.log(validator.isValid('Test', validator.isString));
