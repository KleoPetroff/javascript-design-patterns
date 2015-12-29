var expect = chai.expect;
var assert = chai.assert;

describe('Constructor pattern', function() {
    describe('Object', function() {
        it('should exist when created with object literal', function() {
            assert.isDefined(name);
        });
        it('should exist when created with Object.create method', function() {
            assert.isDefined(myName);
        });
        it('should exist when create with Object constructor', function() {
            assert.isDefined(otherName);
        });
    });

    describe('Properties', function() {
        var testObject = myName;

        it('should have firstName property', function() {
            assert.property(testObject, 'firstName');
        });
        it('should have secondName property',function() {
            assert.property(testObject, 'secondName');
        });
        it('should have age property', function() {
            assert.property(testObject, 'age');
            assert.equal(testObject.age, 24);
        });
    });
});

describe('Object Constructor', function() {
    var hondaObject = honda;
    var fiatObject = fiat;

    it('should create a new instance', function() {
        assert.isObject(hondaObject);
        assert.isObject(fiatObject);
    });

    it('should return information about the car', function() {
        assert.equal(hondaObject.information(), 'This car model is Civic, with grey color from 2007 year.');
        assert.equal(fiatObject.information(),'This car model is punto, with blue color from 2006 year.');
    });
});
