var assert = chai.assert;

describe("Decorator Pattern", function() {
    it("should have a main constructor", function() {
        assert.isDefined(BasicArmor);
    });
    it("should be able to instantiate a new object", function() {
        var testInstance = new BasicArmor('testArmor');

        assert.instanceOf(testInstance,BasicArmor);
        assert.instanceOf(chainArmor, BasicArmor);
    });
    it("should have decorators", function() {
        chainArmor.setColor('green');
        chainArmor.setHeight(55);
        assert.equal(chainArmor.color, 'green');
        assert.equal(chainArmor.height, 55);
    });
    it("should be present for the specific object only", function() {
        var testInstance = new BasicArmor('testArmor');
        assert.isUndefined(testInstance.setColor);
        assert.isUndefined(testInstance.color);
        assert.isUndefined(testInstance.setHeight);
    });
});
