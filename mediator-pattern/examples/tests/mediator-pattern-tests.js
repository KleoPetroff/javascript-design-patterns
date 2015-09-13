var expect = chai.expect;
var assert = chai.assert;

describe('A Mediator Pattern', function(){
    describe('Player Contructor', function(){
        it('should exist', function() {
            assert.isFunction(Player);
        });
        it('should create new player', function() {
            var testPlayer = new Player('John');

            expect(testPlayer).to.be.an.instanceof(Player);
            assert.equal(testPlayer.name, 'John');
            assert.equal(testPlayer.points, 0);
        });
        it('should have play method',function() {
            var testPlayer = new Player('John');

            expect(testPlayer).to.have.property('play');
        });
    });
    describe('Scoreboard Object', function(){
        it('should exist', function() {
            assert.isObject(scoreboard);
        });
        it('should have element property', function() {
            expect(scoreboard).to.have.property('element');
        });
        it('should have update method', function() {
            expect(scoreboard).to.have.property('element');
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
