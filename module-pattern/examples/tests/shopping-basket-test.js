
describe('A Shopping Basket', function() {

    it('should exist', function() {
        var basketTest = myBasket;
        assert.isObject(basketTest);
    });
    it('should add items', function() {
        var basketTest = myBasket;
        basketTest.addItem({
            name: 'Oranges',
            price: 24
        });
        expect(basketTest.getItems()).to.be.equal(1);
    });
    it('should get total items', function() {
        myBasket.clearItems();
        myBasket.addItem({name: 'Apples', price: 22});
        myBasket.addItem({name: 'Lemons', price: 22});
        var basketTest = myBasket.getItems();

        expect(basketTest).to.be.equal(2);
    });
    it('should clear all items', function() {
        myBasket.addItem({
            name: 'Apples',
            price: 22
        });
        myBasket.clearItems();

        var basketTest = myBasket.getItems();
        expect(basketTest).to.be.equal(0);
    });
    it('should count the total price', function() {
        myBasket.addItem({name: 'Apples', price: 22});
        myBasket.addItem({name: 'Lemons', price: 22});
        var basketPrice = myBasket.getTotalPrize();
        expect(basketPrice).to.be.equal(44);

    });

});
