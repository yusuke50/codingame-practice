/* Six Degrees of Kevin Bacon
   https://www.codingame.com/training/easy/six-degrees-of-kevin-bacon
*/

// v1

const actorName = readline();
const n = parseInt(readline());
const movieActors = new Map();
const actorMovies = new Map();
for (let i = 0; i < n; i++) {
    const movieCast = readline();
    const name = movieCast.split(': ')[0];
    if (!movieActors.has(name)) {
        movieActors.set(name, []);
    }
    const actors = movieCast.split(': ')[1].split(', ');
    for (let actor of actors) {
        movieActors.get(name).push(actor);

        if (!actorMovies.has(actor)) {
            actorMovies.set(actor, []);
        }
        actorMovies.get(actor).push(name)
    }
}

const visited = new Set();
const queue = [[actorName, 0]];
visited.add(actorName);

while (queue.length > 0) {
    const [actor, dist] = queue.shift();

    if (actor === 'Kevin Bacon') {
        console.log(dist);
        break;
    }

    for (const movie of (actorMovies.get(actor) || [])) {
        for (const coActor of movieActors.get(movie)) {
            if (!visited.has(coActor)) {
                visited.add(coActor);
                queue.push([coActor, dist + 1]);
            }
        }
    }
}
