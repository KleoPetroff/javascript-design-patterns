
describe('Singleton System', function() {
    it('should exist as an object', function() {
        assert.isObject(singletonTester);
    });
    it('should have a Singleton contructor', function() {
        var mySingletonTest = singletonTester.getInstance({
            pointX: 2,
            pointY: 1
        });
        assert.isObject(mySingletonTest);
        assert.ok(mySingletonTest.pointX);
        assert.ok(mySingletonTest.pointY);
    });
});
