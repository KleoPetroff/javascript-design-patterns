const expect = require('chai').expect;
const Car = require('../object-constructor');

const objectCreation = require('../object-creation');

describe('Constructor pattern', () => {
    describe('Object', () => {
        it('should exist when created with object literal', () => {
            expect(objectCreation.name).to.exist;
        });
        it('should exist when created with Object.create method', () => {
            expect(objectCreation.myName).to.exist;
        });
        it('should exist when create with Object constructor', () => {
            expect(objectCreation.otherName).to.exist;
        });
    });

    describe('Properties', () => {
        const testObject = objectCreation.myName;

        it('should have firstName property', () => {
            expect(testObject).to.haveOwnProperty('firstName');
            expect(testObject.firstName).to.equal('John');
        });
        it('should have secondName property', () => {
            expect(testObject).to.haveOwnProperty('secondName');
            expect(testObject.secondName).to.equal('Smith');
        });
        it('should have age property', () => {
            expect(testObject).to.haveOwnProperty('age');
            expect(testObject.age).to.equal(24);
        });
    });
});

describe('Object Constructor', () => {
    const honda = new Car('Civic', 'grey', 2007);

    it('should create a new instance', () => {
        expect(typeof honda).to.equal('object');
    });

    it('should be an instance of Car', () => {
        expect(honda).to.be.instanceOf(Car);
    });

    it('should return information about the car', () => {
        expect(honda.information()).to.equal('This car model is Civic, with grey color from 2007 year.');
    });
});
