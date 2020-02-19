// 1. Allocate a number to each position on the 4x4 board (0 - 15)
// 2. Randomly allocate a number to each ship (3 ships in total) which will indicate position on board
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

$("div").on("click", function() {
    $(this).css({backgroundColor: "red"});
    numberOfClicks++
    if (numberOfClicks === 3) {
        $("div").off("click");
        console.log (numberOfClicks);
    } 
});



// variable that declares the number of clicks
// if statement that says if the number of clicks is 3 return you've placed all your ships and turn off click event
// prevent player from being able to click inside same div more than once
// if statement goes inside click function