var model = {
    boardSize: 7,
    numShips: 3
    shipLength: 3,
    shipsSunk: 0,

    ships: [
        {locations: [0,0,0], hits: ["","",""]},
        {locations: [0,0,0], hits: ["","",""]},
        {locations: [0,0,0], hits: ["","",""]}
    ],

    fire: function(guess) {
        for (var i=0; i < this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);

            if (ship.hits[index] === "hit") {
                view.displayMessage("You have already hit this location!");
                return true;
            } else if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT");

                if (this.shipsSunk(ship)) {
                    view.displayMessage("You sunk my battleships");
                    this.shipSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed");
        return false;
    },

    isSunk: function(ship) {
        for (var i=0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;  
            }
        }
        return true;
    },

    generateShipLocations: function() {
        var locations;
        
        for (var i=0; i < this.numShips; i++)
    }
}