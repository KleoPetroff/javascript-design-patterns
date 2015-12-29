var assert = chai.assert;

describe('Mixin', function() {
    describe('Constructor', function() {
        it('should exist', function() {
            assert.isDefined(Car);
        });
        it('should return default values if no argument is passed', function() {
            var testCar = new Car({});

            assert.equal(testCar.model, 'no model given');
            assert.equal(testCar.color, 'no color given');
        });
    });
    describe('Mixin', function() {
        it('should exist as a constructor', function() {
            assert.isDefined(Mixin);
        });
        it('should have driveForward method', function() {
            assert.property(Mixin.prototype, 'driveForward');

        });
        it('should have driveBackward method', function() {
            assert.property(Mixin.prototype, 'driveBackward');
        });
        it('should have driveSideways method', function() {
            assert.property(Mixin.prototype, 'driveSideways');
        });
    });
    describe('Augment function', function() {
        it('should extend the passed object with all properties from the Mixin is no specific ones are passed', function() {
            var testCar = function() {
                this.name = 'Ford';
            };
            augment(testCar, Mixin);

            assert.property(testCar.prototype, 'driveSideways');
            assert.property(testCar.prototype, 'driveForward');
            assert.property(testCar.prototype, 'driveBackward');
        });

        it('should extend the passed object with the specific properties when passed', function() {
            var testCar = function() {
                this.name = 'Fiat';
            };
            augment(testCar, Mixin, 'driveBackward', 'driveForward');

            assert.property(testCar.prototype, 'driveBackward');
            assert.property(testCar.prototype, 'driveForward');
        });
    });
});
