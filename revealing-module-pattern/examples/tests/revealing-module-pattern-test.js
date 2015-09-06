var assert = chai.assert;

describe('Revealing Module Pattern', function() {
    it('should exist as object', function() {
        assert.isObject(myRevealingModulePattern);
    });
    it('should set a new name', function() {
        var revealPatternTest = myRevealingModulePattern;
        revealPatternTest.setName('Smith');
        assert.equal(revealPatternTest.getName(), 'Smith');
    });
    it('should return the current name', function() {
        myRevealingModulePattern.setName('John');
        var revealPatternNameTest = myRevealingModulePattern.getName();
        assert.equal(revealPatternNameTest, 'John');
    });
    it('should have a greeting method', function() {
        var revealGreetingTest = myRevealingModulePattern.greeting;
        assert.equal(revealGreetingTest, 'Hello World');
    });
});
