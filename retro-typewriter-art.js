/* Retro Typewriter Art
   https://www.codingame.com/training/easy/retro-typewriter-art
*/

// v2 with AI

const T = readline();

const specialCase = {
    nl: '\n',
    sp: ' ',
    bS: '\\',
    sQ: "'"
};

const decode = (token) => {
    for (const [key, char] of Object.entries(specialCase)) {
        if (token === key) return char;

        if (token.includes(key)) {
            const n = +token.replace(key, '')
            return char.repeat(n);
        }
    }

    const [_all, count, char] = token.match(/^(\d+)([\s\S])$/i);
    return char.repeat(+count);
};

console.log(T.split(' ').map(decode).join(''))
