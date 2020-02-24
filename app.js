// 1. Allocate a number to each position on the 4x4 board (0 - 15)
// 2. Allocate a number to each ship (3 ships in total) which will indicate position on board (using click events)
//     - Do this for both player 1 and player 2
//     - Ensure the positions of player 1s ships are not shown to player 2 and vice versa
// 3. Alternate moves (shots) between player 1 and player 2
//     - Ensure the same position cannot be shot twice
// 4. Store the position of the ships and the moves made by the players (what position was clicked)
// 5. Events:
//     - HIT: move position = ship position
//     - MISS: move position /= ship position
// 6. Player wins when all 3 ships have been HIT
// 7. Reset game



let numberOfClicks = 0;
let turnCount = 0;
let moves = {
    player1Shot: [],
    player2Shot: []
}

// let myArray = ["blue", "red"]

for (let i = 0; i < 16; i++) {
    const $newDiv = $('<div></div>');
    $('section.grid').append($newDiv);

    if (i < 3) {
        $newDiv.css({ backgroundColor: "blue"});
    }

    console.log($newDiv)
}

// for (let i = 0; i < 5; i++) {
//     const $newDiv = $('<div></div>').css("background-color", myArray [Math.floor(Math.random()*1)]);
    
// }

// const $newDiv = $('<div></div>').css("background-color",randomColor);
//     $('section').append($newDiv)


// add ship to the page randomly



$("#player1 div").one("click", function () {
    const turn = turnCount % 2 === 0 ? "player1Shot" : "player2Shot"; 
    if (turnCount % 2 === 0) {
        console.log("PLAYER 1")
        turnCount++;
        moves[turn].push($(event.target).index())
        //$(this).append("<img src='images/IMG_9798.jpg' />");
        $(this).css({ backgroundColor: "blue" });
        numberOfClicks++

        // If THIS has a class ship, add one to player ones score
        // If player one score is 3, player wins
        if (numberOfClicks === 6) {
            $("div").off("click");
            console.log(numberOfClicks);
        }
    } 

});

$("#player2 div").one("click", function () {
    const turn = turnCount % 2 === 0 ? "player1Shot" : "player2Shot"; 
    if (turnCount % 2 === 1) {
        console.log("PLAYER 2");
        turnCount++;
        moves[turn].push($(event.target).index())
        //$(this).append("<img src='images/IMG_9798.jpg' />");
        $(this).css({ backgroundColor: "red" });
        numberOfClicks++
                // If THIS has a class ship, add one to player twos score
                // If player two score is 3, player wins 
        if (numberOfClicks === 6) {
            $("div").off("click");
            console.log(numberOfClicks);
        }

    } 
    
});

// display "you have placed all your ships in the battle field" after each player has done their three clicks
//boats


//randomly place three objects in each grid 
//store the location of these objects in an array?
//use the player counter above to allow each player to click on the grid in turn
//HIT - when player move = randomly placed object
//MISS - when player move /= randomly placed object
//WIN - when player HITs all objects that were randomly placed


// let myArray = ["blue", "red"]

// const startGame = () => {

// }
