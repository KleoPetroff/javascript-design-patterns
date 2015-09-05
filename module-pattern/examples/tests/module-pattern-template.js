
describe('Module Pattern Template', function() {
    it('should exist', function() {
        var testTemplate = moduleTemplate;
        assert.isObject(testTemplate);
    });
    it('should have public variable', function() {
        var testVariable = moduleTemplate.publicVariable;
        assert.ok(testVariable);
    });
    it('should increment the private variable', function() {
        var testTemplate = moduleTemplate;
        testTemplate.publicFunction('foo');
        expect(testTemplate.showCounter()).to.be.at.equal(1);
    });
    it('should access the private method',function() {
        var TeestTemplate = moduleTemplate;
        expect(TeestTemplate.publicFunction('foo')).to.be.equal('foo');
    });
});
