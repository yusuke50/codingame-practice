/* Death First Search - Episode 1
   https://www.codingame.com/training/medium/death-first-search-episode-1
*/ 

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const N = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
const L = parseInt(inputs[1]); // the number of links
const E = parseInt(inputs[2]); // the number of exit gateways
const linkArray = [];
const gateArray = [];
for (let i = 0; i < L; i++) {
    var inputs = readline().split(' ');
    const N1 = parseInt(inputs[0]); // N1 and N2 defines a link between these nodes
    const N2 = parseInt(inputs[1]);
    if (N1 < N2) {
        linkArray.push(`(${N1}, ${N2})`);
    } else {
        linkArray.push(`(${N2}, ${N1})`);
    }
}
for (let i = 0; i < E; i++) {
    const EI = parseInt(readline()); // the index of a gateway node
    gateArray.push(EI)
}


// game loop
while (true) {
    const SI = parseInt(readline()); // The index of the node on which the Bobnet agent is positioned this turn

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');

    const reg = /^\((\w+), (\w+)\)$/;

    const targetLinks = [];
    gateArray.forEach((gate) => {
        if (gate < SI) {
            targetLinks.push(`(${gate}, ${SI})`);
        } else {
            targetLinks.push(`(${SI}, ${gate})`);
        }
    })

    let found = targetLinks.find((item) => {
        return linkArray.find((link) => {
            return item == link
        });
    });

    if (found) {
        var tester = reg.exec(found);
        console.log(`${tester[1]} ${tester[2]}`)
    } else {
        for (let i = 0; i < linkArray.length; i += 1) {
            var tester = reg.exec(linkArray[i]);
            if (tester[2] == gateArray[0] || tester[1] == gateArray[0]) {
                console.log(`${tester[1]} ${tester[2]}`)
                break;
            }
        }
    }
    // Example: 0 1 are the indices of the nodes you wish to sever the link between
}
