var assert = chai.assert;

describe('A Prototype Pattern', function() {
    it('should exist as an object', function() {
        assert.isObject(Car);
    });
    it('should be able to create new instances of the object', function() {
        var ford = Object.create(Car);
        assert.isObject(ford);
    });
    it('should have public methods',function() {
        var ford = Object.create(Car);
        assert.property(ford, 'name', 'Ford');
        assert.isFunction(ford.drive);
        assert.equal(ford.drive(), 'I\'m driving a Ford.');
        assert.isFunction(ford.panic);
        assert.equal(ford.panic(), 'I don\' know how to stop!!');
    });
});
