var assert = chai.assert;

describe('Revealing Module Pattern Scheme', function() {
    it('should exist as an object', function() {
        assert.isObject(schemeRevealingModule);
    });
    it('should start with a total of 1', function() {
        var revealPatternScheme = schemeRevealingModule;
        revealPatternScheme.start();
        assert.equal(revealPatternScheme.total(), 1);
    });
    it('should increment the counter', function() {
        schemeRevealingModule.reset();
        var revealPatternScheme = schemeRevealingModule;
        revealPatternScheme.start();
        revealPatternScheme.increment();
        assert.equal(revealPatternScheme.total(), 2);
    });
});
