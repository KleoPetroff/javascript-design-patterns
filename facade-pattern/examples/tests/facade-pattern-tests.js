var assert = chai.assert;

describe('A Facade Pattern', function() {
    describe('Facade Object', function() {
        it('should exist', function() {
            assert.ok(Mortgage);
            assert.isFunction(Mortgage);
        });
        it('should have apply method', function() {
            assert.ok(Mortgage.apply);
            assert.isFunction(Mortgage.apply);
            assert.property(Mortgage, 'apply');
        });
        it('should return a string result', function() {
            var john = new Mortgage('John');
            assert.equal(john.apply(3000), 'John has been approved for a 3000 mortgage');
        });
    });
    describe('Helper Objects', function() {
        it('should exist', function() {
            assert.ok(Bank);
            assert.ok(Credit);
            assert.ok(Background);

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
            assert.equal(new Bank().verify('john', 3000), true);
            assert.equal(new Credit().verify('john', 3000), true);
            assert.equal(new Background().verify('john', 3000), true);
        });
    });
});
