var assert = chai.assert;

describe('A Singleton Pattern', function() {
    it('should exist as an object', function() {
        assert.isObject(mySingleton);
    });
    it('should be initialized with getInstance method', function() {
        var myInstance = mySingleton.getInstance();
        assert.isObject(myInstance);
    });
    it('should have a public method', function() {
        var myInstance = mySingleton.getInstance();
        assert.equal(myInstance.publicMethod(), 'Public Method');
    });
    it('should have a public property', function() {
        var myInstance = mySingleton.getInstance();
        assert.equal(myInstance.publicProperty, 'Public property');
    });
});
