// 4-payment.js
const Utils = require('./utils');

function calculateTotal(a, b) {
  const result = Utils.calculateNumber('SUM', a, b);
  console.log(`The total is: ${result}`);
  return result;
}

module.exports = calculateTotal;
