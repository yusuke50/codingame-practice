/* Shadows Of The Knight - Episode 1
   https://www.codingame.com/training/medium/shadows-of-the-knight-episode-1
*/ 

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
const X0 = parseInt(inputs[0]);
const Y0 = parseInt(inputs[1]);
let curX = X0;
let curY = Y0;
let lastDistanceX = Math.floor(W / 2);
let lastDistanceY = Math.floor(H / 2);

// game loop
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');

    let tempX = curX;
    let tempY = curY;

    if (bombDir.indexOf('L') > -1) {
        tempX -= lastDistanceX;
    } else if (bombDir.indexOf('R') > -1) {
        tempX += lastDistanceX;
    }

    if (bombDir.indexOf('U') > -1) {
        tempY -= lastDistanceY;
    } else if (bombDir.indexOf('D') > -1) {
        tempY += lastDistanceY;
    }

    curX = Math.min(Math.max(tempX, 0), W - 1)
    curY = Math.min(Math.max(tempY, 0), H - 1)

    // the location of the next window Batman should jump to.
    console.log(curX, curY);

    lastDistanceX = Math.round((lastDistanceX / 2))
    lastDistanceY = Math.round((lastDistanceY / 2))
}
