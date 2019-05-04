const expect = require('chai').expect;
const {Background, Bank, Credit, Mortgage} = require('../facade-pattern');

describe('A Facade Pattern', function() {
    describe('Facade Object', function() {
        it('should exist', function() {
            expect(Mortgage).to.exist;
        });
        it('should have apply method', function() {
            expect(Mortgage.apply).to.exist;
            expect(typeof Mortgage.apply).to.equal('function');
            expect(Mortgage.prototype.apply).to.exist;
        });
        it('should return a string result', function() {
            const john = new Mortgage('John');
            expect(john.apply(3000)).to.equal('John has been approved for a 3000 mortgage');
        });
    });
    describe('Helper Objects', function() {
        it('should exist', function() {
            expect(Bank).to.exist;
            expect(Credit).to.exist;
            expect(Background).to.exist;

            expect(typeof Bank).to.equal('function');
            expect(typeof Credit).to.equal('function');
            expect(typeof Background).to.equal('function');
        });
        it('should have verify methods', function() {
            expect(Bank.verify).to.exist;
            expect(Credit.verify).to.exist;
            expect(Background.verify).to.exist;
        });
        it('should return true', function() {
            expect(Bank.verify('john', 3000)).to.be.true;
            expect(Credit.verify('john', 3000)).to.be.true;
            expect(Background.verify('john', 3000)).to.be.true;
        });
    });
});
