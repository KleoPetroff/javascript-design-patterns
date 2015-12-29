var expect = chai.expect;
var assert = chai.assert;

describe('A Command Pattern', function() {
    describe('The Command Pattern', function() {
        it('should exist', function() {
            assert.ok(inventoryManager);
            assert.isObject(inventoryManager);
        });
        it('should have an add method', function() {
            assert.ok(inventoryManager.add);
            assert.isFunction(inventoryManager.add);
        });
        it('should have delete method', function() {
            assert.ok(inventoryManager.remove);
            assert.isFunction(inventoryManager.remove);
        });
        it('should have check method', function() {
            assert.ok(inventoryManager.check);
            assert.isFunction(inventoryManager.check);
        });

        it('should have execute method', function() {
            assert.ok(inventoryManager.execute);
            assert.isFunction(inventoryManager.execute);
        });

        it('should have execute method which can call all other methods', function() {
            var testInventoryAdd = inventoryManager.execute('add', 'Harry Potter', '33214');
            var testInventoryRemove = inventoryManager.execute('remove', 'Harry Potter', '33214');
            var testInventoryCheck = inventoryManager.execute('check', 'Harry Potter', '33214');

            assert.equal(testInventoryAdd, 'You have successfully added Harry Potter with ID: 33214');
            assert.equal(testInventoryRemove, 'You have successfully removed Harry Potter with ID: 33214');
            assert.equal(testInventoryCheck, 'You have selected Harry Potter with ID: 33214');
        });
    });
});
