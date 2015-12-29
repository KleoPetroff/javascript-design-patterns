
describe('Module Pattern Template', function() {
    it('should exist', function() {
        assert.isObject(moduleTemplate);
    });
    it('should have public variable', function() {
        var testVariable = moduleTemplate.publicVariable;
        assert.ok(testVariable);
    });
    it('should increment the private variable', function() {
        var testTemplate = moduleTemplate;
        testTemplate.publicFunction('foo');
        assert.equal(testTemplate.showCounter(), 1);
    });
    it('should access the private method',function() {
        assert.equal(moduleTemplate.publicFunction('foo'), 'foo');
    });
});
