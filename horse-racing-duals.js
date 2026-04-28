/* Horse-racing Duals
   https://www.codingame.com/training/easy/horse-racing-duals
*/

const N = parseInt(readline());
const fullArray = [];
for (let i = 0; i < N; i++) {
    const pi = parseInt(readline());
    fullArray.push(pi);
}

fullArray.sort((a, b) => (a - b));

let diff = 10000000;
for (let i = 0; i < N - 1; i += 1) {
    let d = fullArray[i + 1] - fullArray[i];
    if (d < diff) {
        diff = d;
    }
}

console.log(diff);
