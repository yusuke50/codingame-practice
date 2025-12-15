/* Shadows Of The Knight - Episode 1
   https://www.codingame.com/training/medium/shadows-of-the-knight-episode-1
*/

// v2 with AI

var inputs = readline().split(' ');
const W = parseInt(inputs[0]);
const H = parseInt(inputs[1]);
const N = parseInt(readline());
var inputs = readline().split(' ');
const X0 = parseInt(inputs[0]);
const Y0 = parseInt(inputs[1]);

let curX = X0;
let curY = Y0;

// Track the search boundaries
let minX = 0, maxX = W - 1;
let minY = 0, maxY = H - 1;

while (true) {
    const bombDir = readline();

    // Update boundaries based on direction
    if (bombDir.includes('L')) {
        maxX = curX - 1;
    } else if (bombDir.includes('R')) {
        minX = curX + 1;
    }

    if (bombDir.includes('U')) {
        maxY = curY - 1;
    } else if (bombDir.includes('D')) {
        minY = curY + 1;
    }

    // Jump to the middle of the remaining search space
    curX = Math.floor((minX + maxX) / 2);
    curY = Math.floor((minY + maxY) / 2);

    console.log(curX, curY);
}