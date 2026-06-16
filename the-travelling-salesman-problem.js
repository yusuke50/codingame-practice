/* The Travelling Salesman Problem
   https://www.codingame.com/training/easy/the-travelling-salesman-problem
*/

// v1

const N = parseInt(readline());
const citiesMap = new Map();
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const X = parseInt(inputs[0]);
    const Y = parseInt(inputs[1]);
    citiesMap.set(i, { x: X, y: Y, visited: false });
}
const firstCity = citiesMap.get(0);

citiesMap.set(0, { ...firstCity, visited: true });
let currX = firstCity.x;
let currY = firstCity.y;
let total = 0;
let calcResult = [];
let lastCity;

const calcDist = () => {
    citiesMap.forEach((item, idx) => {
        if (!item.visited) {
            let diffX = item.x - currX;
            let diffY = item.y - currY;
            let dist = Math.sqrt(diffX * diffX + diffY * diffY);
            calcResult.push({ idx, dist });
        }
    });

    if (calcResult.length > 0) {
        let minObj = calcResult[0];
        let minDist = Infinity;
        calcResult.forEach((obj) => {
            if (obj.dist < minDist) {
                minObj = obj;
                minDist = obj.dist;
            }
        });

        total += minDist;
        let newCity = citiesMap.get(minObj.idx);
        citiesMap.set(minObj.idx, { ...newCity, visited: true });
        currX = newCity.x;
        currY = newCity.y;

        if (calcResult.length == 1) {
            lastCity = citiesMap.get(minObj.idx);
        }
        calcResult = [];
        return 1;
    } else {
        return 'empty';
    }
};

for (let i = 0; i < N; i += 1) {
    let res = calcDist();
    if (res == 'empty') {
        let lastDistX = lastCity.x - firstCity.x;
        let lastDistY = lastCity.y - firstCity.y;
        let lastDist = Math.sqrt(lastDistX * lastDistX + lastDistY * lastDistY);
        console.log(Math.round(total + lastDist));
    }
}
