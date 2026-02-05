/* ASCII Art
   https://www.codingame.com/training/easy/ascii-art
*/

// v2 with AI

const L = parseInt(readline());
const H = parseInt(readline());
const T = readline();

const charIndices = T
    .toUpperCase()
    .split('')
    .map(char => {
        const index = char.charCodeAt(0) - 'A'.charCodeAt(0);
        return (index >= 0 && index < 26) ? index : 26;
    });

const outputLines = [];
for (let row = 0; row < H; row++) {
    const Row = readline();

    const rowSegments = charIndices.map(charIndex => {
        const startPos = charIndex * L;
        return Row.substring(startPos, startPos + L);
    });

    outputLines.push(rowSegments.join(''));
}

outputLines.forEach(line => console.log(line));