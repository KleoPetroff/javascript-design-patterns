var expect = chai.expect;
var assert = chai.assert;


describe('Flywight Pattern', function() {
    it('should exist', function() {
        assert.isDefined(Flyweight);
    });
    it('should have Color property in the prototype object of the constructor', function() {
        assert.property(Flyweight.prototype, 'Color');
    });
    it('Color property should have default value "green"', function() {
        assert.equal(Flyweight.prototype.Color, 'green');
    });
    it('should have Name property in the prototype object of the constructor', function() {
        assert.property(Flyweight.prototype, 'Name');
    });
    it('Name property should have default value "Ball"', function() {
        assert.equal(Flyweight.prototype.Name, 'Ball');
    });

    it('should have Shape property in the prototype object of the contructor', function() {
        assert.property(Flyweight.prototype, 'Shape');
    });
    it('Name property should have default value "Circle"', function() {
        assert.equal(Flyweight.prototype.Shape, 'Circle');
    });
    it('a new object should be able to overwrite the default values', function() {
        var testFlyweight = new Flyweight();
        testFlyweight.Color = 'blue';
        testFlyweight.Name = 'Ballon';
        testFlyweight.Shape = 'Oval';
        assert.equal(testFlyweight.Color, 'blue');
        assert.equal(testFlyweight.Name, 'Ballon');
        assert.equal(testFlyweight.Shape, 'Oval');
    });
});
