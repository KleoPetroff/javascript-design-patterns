var expect = chai.expect;
var assert = chai.assert;

describe('A Module Pattern', function() {
    it('should exist', function() {
        var testPattern = myModule;
        assert.isObject(testPattern);
    });
    it('should have counter', function() {
        var testCounter = myModule.showCounterValue();
        expect(testCounter).to.be.at.least(0);
    });
    it('should increment the counter', function() {
        var testPattern = myModule;
        testPattern.resetCounter();
        testPattern.incrementCounter();
        expect(testPattern.showCounterValue()).to.be.equal(1);
    });
    it('should reset the counter', function() {
        var testPattern = myModule;
        testPattern.incrementCounter();
        testPattern.resetCounter();
        expect(testPattern.showCounterValue()).to.be.equal(0);
    });
});
