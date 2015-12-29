var assert = chai.assert;

describe('A Mediator Pattern', function(){
    describe('Player Constructor', function(){
        it('should exist', function() {
            assert.isFunction(Player);
        });
        it('should create new player', function() {
            var testPlayer = new Player('John');

            assert.instanceOf(testPlayer, Player);
            assert.equal(testPlayer.name, 'John');
            assert.equal(testPlayer.points, 0);
        });
        it('should have play method',function() {
            var testPlayer = new Player('John');

            assert.property(testPlayer, 'play');
        });
    });
    describe('Scoreboard Object', function(){
        it('should exist', function() {
            assert.isObject(scoreboard);
        });
        it('should have element property', function() {
            assert.property(scoreboard, 'element');
        });
        it('should have update method', function() {
            assert.property(scoreboard, 'element');
        });
    });
    describe('Mediator', function() {
        it('should exist', function() {
            assert.isObject(mediator);
        });
        it('should create two players', function() {
            mediator.setup();
            assert.ok(mediator.players.home);
            assert.ok(mediator.players.guest);
        });
    });
});
