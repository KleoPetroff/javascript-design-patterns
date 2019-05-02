var expect = require('chai').expect;

const inventoryManager = require('../command-pattern');

describe('A Command Pattern', () => {
    describe('The Command Pattern', () => {
        it('should exist', () => {
            expect(inventoryManager).to.exist;
            expect(typeof inventoryManager).to.equal('object');
        });
        it('should have an add method', () => {
            expect(inventoryManager.add).to.exist;
            expect(typeof inventoryManager.add).to.equal('function');
        });
        it('should have delete method', () => {
            expect(inventoryManager.remove).to.exist;
            expect(typeof inventoryManager.remove).to.equal('function');
        });
        it('should have check method', () => {
            expect(inventoryManager.check).to.exist;
            expect(typeof inventoryManager.check).to.equal('function');
        });

        it('should have execute method', () => {
            expect(inventoryManager.execute).to.exist;
            expect(typeof inventoryManager.execute).to.equal('function');
        });

        it('should have execute method which can call all other methods', () => {
            const testInventoryAdd = inventoryManager.execute('add', 'Harry Potter', '33214');
            const testInventoryRemove = inventoryManager.execute('remove', 'Harry Potter', '33214');
            const testInventoryCheck = inventoryManager.execute('check', 'Harry Potter', '33214');

            expect(testInventoryAdd).to.equal('You have successfully added Harry Potter with ID: 33214');
            expect(testInventoryRemove).to.equal('You have successfully removed Harry Potter with ID: 33214');
            expect(testInventoryCheck).to.equal('You have selected Harry Potter with ID: 33214');
        });
    });
});
