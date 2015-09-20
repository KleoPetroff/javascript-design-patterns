var expect = chai.expect;
var assert = chai.assert;


describe('A Command Pattern', function() {
    describe('The Command Pattern', function() {
        it('should exist', function() {
            expect(inventoryManager).to.be.ok;
            assert.isObject(inventoryManager);
        });
        it('should have an add method', function() {
            expect(inventoryManager.add).to.be.ok;
            assert.isFunction(inventoryManager.add);
        });
        it('should have delete method', function() {
            expect(inventoryManager.remove).to.be.ok;
            assert.isFunction(inventoryManager.remove);
        });
        it('should have check method', function() {
            expect(inventoryManager.check).to.be.ok;
            assert.isFunction(inventoryManager.check);
        });

        it('should have execute method', function() {
            expect(inventoryManager.execute).to.be.ok;
            assert.isFunction(inventoryManager.execute);
        });

        it('should have execute method which can call all other methods', function() {
            var testInventoryAdd = inventoryManager.execute('add', 'Harry Potter', '33214');
            var testInventoryRemove = inventoryManager.execute('remove', 'Harry Potter', '33214');
            var testInventoryCheck = inventoryManager.execute('check', 'Harry Potter', '33214');

            expect(testInventoryAdd, 'You have successfully added Harry Potter with ID: 33214');
            expect(testInventoryRemove, 'You have successfully removed Harry Potter with ID: 33214');
            expect(testInventoryCheck, 'You have successfully checked Harry Potter with ID: 33214');
        });
    });
});
