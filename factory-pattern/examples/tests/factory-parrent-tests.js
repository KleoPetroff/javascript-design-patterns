var expect = chai.expect;
var assert = chai.assert;

describe('A Factory Pattern', function() {
    it('should have a parrent constructor', function() {
        expect(CarMaker).to.exist;
        assert.isFunction(CarMaker);
    });
    it('should have a factory method', function() {
        expect(CarMaker.prototype.drive).to.be.property;
    });
    it('should have a static factory method', function() {
        expect(CarMaker.factory).to.be.property;
    });
    it('should return a new instance of the specific type object', function() {
        var newSUV = CarMaker.factory('SUV');
        expect(newSUV).to.be.an.instanceof(CarMaker['SUV']);
    });
    it('should have factory type objects', function() {
        expect(CarMaker.SUV).to.exist;
        expect(CarMaker.Compact).to.exist;
        expect(CarMaker.Comvertable).to.exist;
    });
});
