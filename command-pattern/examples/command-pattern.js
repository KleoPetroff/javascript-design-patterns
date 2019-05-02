'use strict';

const inventoryManager = {
    // add new item to the inventory
    add(item, id) {
        return 'You have successfully added ' + item + ' with ID: ' + id;
    },
    // remove an item from the inventory
    remove(item, id) {
        return 'You have successfully removed ' + item + ' with ID: ' + id;
    },
    // check for item
    check(item, id) {
        return 'You have selected ' + item + ' with ID: ' + id;
    }
};

inventoryManager.execute = function(name) {
    return inventoryManager[name] && inventoryManager[name].apply(inventoryManager, [].slice.call(arguments, 1));
};

inventoryManager.execute('add', 'Harry Potter', '33214');
inventoryManager.execute('check', 'Harry Potter', '33214');
inventoryManager.execute('remove', 'Harry Potter', '33214');

module.exports = inventoryManager;
