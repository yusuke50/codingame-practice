/* ASCII Art
   https://www.codingame.com/training/easy/ascii-art
*/

// v1
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const L = parseInt(readline());
console.error('L: ', L)
const H = parseInt(readline());
console.error('H: ', H)
const T = readline();
const alphaArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const finalArray = [];
for (let i = 0; i < T.length; i += 1) {
    let idx = alphaArray.findIndex((alpha) => (alpha == T[i].toUpperCase()))
    idx = idx > -1 ? idx : 26
    finalArray.push(idx)
}

const finalConsole = [];
for (let i = 0; i < H; i += 1) {
    finalConsole.push([])
}

for (let i = 0; i < H; i++) {
    const ROW = readline();
    for (let a = 0; a < finalArray.length; a += 1) {
        let strIdx = finalArray[a] * L
        finalConsole[i].push(ROW.slice(strIdx, strIdx + L))
    }
}

for (let i = 0; i < finalConsole.length; i += 1) {
    console.log(finalConsole[i].join().replaceAll(',', ''))
}