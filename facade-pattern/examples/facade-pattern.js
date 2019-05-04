'use strict';

class Mortgage {
    constructor(name) {
        this.name = name;
    }

    apply(amount) {
        let result = 'approved';

        if (!Bank.verify(this.name, amount)) {
            result = 'denied';
        } else if (!Credit.verify(this.name, amount)) {
            result = 'denied';
        } else if (!Background.verify(this.name, amount)) {
            result = 'denied';
        }

        return `${this.name} has been ${result} for a ${amount} mortgage`;
    }
}

class Bank {
    static verify(name, amount) {
        // Other logic
        return true;
    }
}

class Credit {
    static verify(name, amount) {
        // other logic
        return true;
    }
}

class Background {
    static verify(name, amount) {
        // other logic
        return true;
    }
}

module.exports = {
    Mortgage,
    Credit,
    Background,
    Bank
};
