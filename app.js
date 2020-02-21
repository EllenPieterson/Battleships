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
// 7.  Reset game


const $allDivs = $('div');

let numberOfClicks = 0;
let turnCount = 0;
let moves = {
    player1Shot: [],
    player2Shot: []
}

//make another grid using dry code 
//define a box in js and push it into html 

for (let i = 0; i < 16; i++) {
    const $newDiv = $('<div></div>');
    $('section.grid').append($newDiv);
}

// variable that declares the number of clicks
// if statement that says if the number of clicks is 3  turn off click event
// prevent player from being able to click inside same div more than once
// if statement goes inside click function

$("div").one("click", function () {
    const turn = turnCount % 2 === 0 ? "player1Shot" : "player2Shot"; {
    if (turnCount % 2 === 0) {
        event.target.innerHTML = player1;
        turnCount++;
        moves[turn].push($(event.target).index())
    } else if (turnCount % 2 === 1) {
        event.target.innerHTML = player2;
        turnCount ++; 
        moves[turn].push($(event.target).index())
        console.log(moves)
    }}
        $(this).css({ backgroundColor: "red" });
        numberOfClicks++
        if (numberOfClicks === 6) {
            $("div").off("click");

            console.log(numberOfClicks);
        }
    });




//define whose turn it is (player1 or player2)
//specify where player1 and player2 moves can go


// allow three clicks inside each player grid
// display "you have placed all your ships in the battle field" after each player has done their three clicks