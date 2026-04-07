/* Retro Typewriter Art
   https://www.codingame.com/training/easy/retro-typewriter-art
*/

const T = readline();
const splitArray = T.split(' ')
const arrayLen = splitArray.length;
let ans = '';
splitArray.forEach((item) => {
    if (item == 'nl') {
        ans += '\n'
    } else if (item.includes('sp')) {
        let count = +item.replace('sp', '');
        for (let i = 0; i < count; i += 1) {
            ans += ' ';
        }
    } else if (item.includes('bS')) {
        let count = +item.replace('bS', '');
        for (let i = 0; i < count; i += 1) {
            ans += '\\';
        }
    } else if (item.includes('sQ')) {
        let count = +item.replace('sQ', '');
        for (let i = 0; i < count; i += 1) {
            ans += `'`;
        }
    } else {
        let re = /(\d+)([\s\S{1}])/i;
        let symbol = item.match(re)[2];
        let count = +item.match(re)[1];
        for (let i = 0; i < count; i += 1) {
            ans += symbol
        }
    }
})

console.log(ans);
