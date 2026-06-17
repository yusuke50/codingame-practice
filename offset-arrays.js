/* Offset Arrays
   https://www.codingame.com/training/easy/offset-arrays
*/

// v1
const n = parseInt(readline());
const total = {};

for (let i = 0; i < n; i++) {
    const assignment = readline();
    const regex = /(\w+)\[(.+)\.\.(.+)\] = (.+)/;
    const [allString, identifier, firstIdx, lastIdx, others] = assignment.match(regex);
    if (!total[identifier]) {
        total[identifier] = {};
    }
    total[identifier]['arr'] = others.split(' ');
    total[identifier]['firstIdx'] = firstIdx;
}

const x = readline();
let [...obj] = x.split('[').map(t => t.replaceAll(']', ''));
const checkValue = (obj) => {
    let targetObj = total[obj[obj.length - 2]];
    let trueIdx = Number(obj[obj.length - 1]) - Number(targetObj.firstIdx);
    let value = targetObj.arr[trueIdx];
    obj = obj.slice(0, -2);
    obj.push(value);
    return obj;
};

while (obj.length > 1) {
    obj = checkValue(obj);
}

console.log(obj[0]);
