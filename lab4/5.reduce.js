'use strict';

const sum = (...args) => args.reduce((total, item) => total + item, 0);

module.exports = { sum };