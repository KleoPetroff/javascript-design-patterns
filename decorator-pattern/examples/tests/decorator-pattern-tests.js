var expect = chai.expect;

describe("Decorator Pattern", function() {
    it("should have a main contructor", function() {
        expect(BasicArmor).to.exist;
    });
    it("should be able to instantiate a new object", function() {
        var testInstance = new BasicArmor('testArmor');

        expect(testInstance).to.be.instanceof(BasicArmor);
        expect(chainArmor).to.be.instanceof(BasicArmor);
    });
    it("should have decorators", function() {
        chainArmor.setColor('green');
        chainArmor.setHeight(55);
        expect(chainArmor.color).to.be.equal('green');
        expect(chainArmor.height).to.be.equal(55);
    });
    it("should be present for the specific object only", function() {
        var testInstance = new BasicArmor('testArmor');
        expect(testInstance.setColor).to.be.undefined;
        expect(testInstance.color).to.be.undefined;
        expect(testInstance.setHeight).to.be.undefined;
    });
});
