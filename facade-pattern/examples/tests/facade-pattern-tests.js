var expect = chai.expect;
var assert = chai.assert;

describe('A Facade Pattern', function() {
    describe('Facade Object', function() {
        it('should exist', function() {
            expect(Mortgage).to.be.ok;
            assert.isFunction(Mortgage);
        });
        it('should have apply method', function() {
            expect(Mortgage.apply).to.be.ok;
            assert.isFunction(Mortgage.apply);
            assert.property(Mortgage, 'apply');
        });
        it('should return a string result', function() {
            var john = new Mortgage('John');
            expect(john.apply(3000)).to.equal('John has been approved for a 3000 mortgage')
        });
    });
    describe('Helper Objects', function() {
        it('should exist', function() {
            expect(Bank).to.be.ok;
            expect(Credit).to.be.ok;
            expect(Background).to.be.ok;

            assert.isFunction(Bank);
            assert.isFunction(Credit);
            assert.isFunction(Background);
        });
        it('should have verify methods', function() {
            assert.property(new Bank(), 'verify');
            assert.property(new Credit(), 'verify');
            assert.property(new Background(), 'verify');
        });
        it('should return true', function() {
            expect(new Bank().verify('john', 3000)).to.equal(true);
            expect(new Credit().verify('john', 3000)).to.equal(true);
            expect(new Background().verify('john', 3000)).to.equal(true);
        });
    });
});
