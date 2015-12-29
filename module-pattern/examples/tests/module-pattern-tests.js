var assert = chai.assert;

describe('A Module Pattern', function() {
    it('should exist', function() {
        assert.isObject(myModule);
    });
    it('should have counter', function() {
        var testCounter = myModule.showCounterValue();
        assert.equal(testCounter, 0);
    });
    it('should increment the counter', function() {
        var testPattern = myModule;
        testPattern.resetCounter();
        testPattern.incrementCounter();
        assert.equal(testPattern.showCounterValue(), 1);
    });
    it('should reset the counter', function() {
        var testPattern = myModule;
        testPattern.incrementCounter();
        testPattern.resetCounter();
        assert.equal(testPattern.showCounterValue(), 0);
    });
});
