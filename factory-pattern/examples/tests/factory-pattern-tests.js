var assert = chai.assert;

describe('A Factory Pattern', function() {
    it('should have a parrent constructor', function() {
        assert.isDefined(CarMaker);
        assert.isFunction(CarMaker);
    });
    it('should have a factory method', function() {
        assert.isDefined(CarMaker.prototype.drive);
        assert.isFunction(CarMaker.prototype.drive);
    });
    it('should have a static factory method', function() {
        assert.isDefined(CarMaker.factory);
        assert.isFunction(CarMaker.factory)
    });
    it('should return a new instance of the specific type object', function() {
        var newSUV = CarMaker.factory('SUV');
        assert.instanceOf(newSUV, CarMaker['SUV']);
    });
    it('should have factory type objects', function() {
        assert.isDefined(CarMaker.SUV);
        assert.isDefined(CarMaker.Compact);
        assert.isDefined(CarMaker.Comvertable);
    });
});
