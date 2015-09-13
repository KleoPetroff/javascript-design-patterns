// Player objects are created with Player contructor and have own properties
// points and name.
function Player(name) {
    this.points = 0;
    this.name = name;
}

//The play() method from the prototype increments the points
// with 1 and notifies the mediator.
Player.prototype.play = function() {
    this.point += 1;
    mediator.played();
};

// The scoreboard object have an update() method which gets called by the mediator
// after every player's turn. The scoreboard doesn't know about any players and
// doesn't keep score; it displays only the score given by the mediator.
var scoreboard = {
    // HTML element to be updated
    element: document.getElementById('results'),

    //update the score display
    update: function(score) {
        var i;
        var msg = '';
        for(i in score) {
            if(score.hasOwnProperty(i)) {
                msg += '<p><strong>' + i + '</strong>: ';
                msg += scope[i];
                msg += '</p>';
            }
        }
        this.element.innerHTML = msg;
    }
};


// The mediator initializes the game, creating player object in it's setup() method
// and keeps track of the players in its players property. The played method is
// called each player after each turn. These method updates a score and sends it
// to the scoreboard for display. The last method keypress() handles the keyboard
// events, determines which player has a turn and notifies it
var mediator = {
    players: {},

    // initialization
    setup: function() {
        var players = this.players;
        players.home = new Player('home');
        players.guest = new Player('guest');
    },

    // if someone plays, update score
    played: function() {
        var players = this.players;
        var score = {
            Home: players.home.points,
            Guest: players.guest.points
        };
        scoreboard.update(score);
    },

    // handles user interaction
    keypress: function(e) {
        e = e || windows.event;
        // keypress 1
        if(e.which === 49) {
            mediator.players.home.play();
            return;
        }
        // keypress 0
        if (e.which === 48) {
            mediator.players.guest.play();
        }
    }
};

// Set up and start the game

mediator.setup();
window.onkeypress = mediator.keypress;

// game after 30 seconds
setTimeout(function() {
    window.onkeypress = null;
    console.log('Game Over');
});
