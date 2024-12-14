// 4-payment.test.js
const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const calculateTotal = require('./4-payment');

describe('Testing payment calculations with stubs and spies', () => {
  let consoleSpy;
  let calculateNumberStub;

  beforeEach(() => {
    // Stub the calculateNumber method to always return 10
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log to check the log output
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the stub and the spy
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it('should call calculateNumber with correct parameters and return 10', () => {
    const result = calculateTotal(100, 20);
    
    // Verify the stub was called with correct arguments
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    
    // Verify the returned result
    expect(result).to.equal(10);
    
    // Verify the console.log was called with the correct message
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
  });
});
