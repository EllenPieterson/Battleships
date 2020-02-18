// 1. Allocate a number to each position on the 4x4 baord (0 - 15)
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


const onload = () => {
    const $allDivs = $('div');
    const $firstDiv = $('div').first();

for (let i = 0; i < 16; i++) {
    // Write the code to create 16 divs and give each a random background color
    
}