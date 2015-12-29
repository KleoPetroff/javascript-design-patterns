
describe('A Shopping Basket', function() {

    it('should exist', function() {
        assert.isObject(myBasket);
    });
    it('should add items', function() {
        var basketTest = myBasket;
        basketTest.addItem({
            name: 'Oranges',
            price: 24
        });
        assert.equal(basketTest.getItems(), 1);
    });
    it('should get total items', function() {
        myBasket.clearItems();
        myBasket.addItem({name: 'Apples', price: 22});
        myBasket.addItem({name: 'Lemons', price: 22});
        var basketTest = myBasket.getItems();

        assert.equal(basketTest, 2);
    });
    it('should clear all items', function() {
        myBasket.addItem({
            name: 'Apples',
            price: 22
        });
        myBasket.clearItems();

        var basketTest = myBasket.getItems();
        assert.equal(basketTest, 0);
    });
    it('should count the total price', function() {
        myBasket.addItem({name: 'Apples', price: 22});
        myBasket.addItem({name: 'Lemons', price: 22});
        var basketPrice = myBasket.getTotalPrize();

        assert.equal(basketPrice, 44);

    });

});
