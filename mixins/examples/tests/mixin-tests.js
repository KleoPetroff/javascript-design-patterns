var expect = chai.expect;

describe('Mixin', function() {
    describe('Constructor', function() {
        it('should exist', function() {
            expect(Car).to.exist;
        });
        it('should return default values if no argument is passed', function() {
            var testCar = new Car({});

            expect(testCar.model).to.be.equal('no model given');
            expect(testCar.color).to.be.equal('no color given');
        });
    });
    describe('Mixin', function() {
        it('should exist as a constructor', function() {
            expect(Mixin).to.exist;
        });
        it('should have driveForward method', function() {
            expect(Mixin.prototype).to.have.property('driveForward');

        });
        it('should have driveBackward method', function() {
            expect(Mixin.prototype).to.have.property('driveBackward');
        });
        it('should have driveSideways method', function() {
            expect(Mixin.prototype).to.have.property('driveSideways');
        });
    });
    describe('Augment function', function() {
        it('should extend the passed object with all properties from the Mixin is no specific ones are passed', function() {
            var testCar = function() {
                this.name = 'Ford';
            };
            augment(testCar, Mixin);

            expect(testCar.prototype).to.have.property('driveSideways');
            expect(testCar.prototype).to.have.property('driveForward');
            expect(testCar.prototype).to.have.property('driveBackward');

        });

        it('should extend the passed object with the specific properties when passed', function() {
            var testCar = function() {
                this.name = 'Fiat';
            };
            augment(testCar, Mixin, 'driveBackward', 'driveForward');

            expect(testCar.prototype).to.have.property('driveBackward');
            expect(testCar.prototype).to.have.property('driveForward');
        });
    });
});
