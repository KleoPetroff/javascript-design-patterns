const expect = require('chai').expect;
const {chainArmor, BasicArmor} = require('../decorator-pattern');

describe("Decorator Pattern", () => {
    it("should have a main constructor", () => {
        expect(BasicArmor).to.exist;
    });
    it("should be able to instantiate a new object", () => {
        const testInstance = new BasicArmor('testArmor');
        expect(testInstance).to.be.instanceOf(BasicArmor);
    });
    it("should have decorators", () => {
        chainArmor.setColor('green');
        chainArmor.setHeight(55);

        expect(chainArmor.color).to.equal('green');
        expect(chainArmor.height, 55);
    });
    it("should be present for the specific object only", () => {
        const testInstance = new BasicArmor('testArmor');

        expect(testInstance.setColor).to.not.exist;
        expect(testInstance.color).to.not.exist;
        expect(testInstance.setHeight).to.not.exist;
    });
});
