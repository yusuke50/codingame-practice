/* The Travelling Salesman Problem
   https://www.codingame.com/training/easy/the-travelling-salesman-problem
*/

// v2 with AI
const N = parseInt(readline());
const cities = [];
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const X = parseInt(inputs[0]);
    const Y = parseInt(inputs[1]);
    cities.push({ x: X, y: Y, visited: false });
}

let currIdx = 0;
cities[currIdx].visited = true;
let total = 0;

const getDistance = (c1, c2) => {
    const diffX = c1.x - c2.x;
    const diffY = c1.y - c2.y;
    return Math.sqrt(diffX * diffX + diffY * diffY);
}

for (let step = 0; step < N - 1; step += 1) {
    let minIdx = -1;
    let minDist = Infinity;

    for (let i = 0; i < N; i += 1) {
        if (!cities[i].visited) {
            const dist = getDistance(cities[currIdx], cities[i]);
            if (dist < minDist) {
                minDist = dist;
                minIdx = i;
            }
        }
    }

    total += minDist;
    cities[minIdx].visited = true;
    currIdx = minIdx;
}

total += getDistance(cities[currIdx], cities[0]);
console.log(Math.round(total));
