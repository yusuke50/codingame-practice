/* Death First Search - Episode 1
   https://www.codingame.com/training/medium/death-first-search-episode-1
*/ 

// v2 with AI

// Parse initial input
var inputs = readline().split(' ');
const N = parseInt(inputs[0]); // total nodes
const L = parseInt(inputs[1]); // number of links
const E = parseInt(inputs[2]); // number of gateways

// Build adjacency list for the graph
const graph = new Map();
for (let i = 0; i < N; i++) {
    graph.set(i, new Set());
}

// Store all links
for (let i = 0; i < L; i++) {
    var inputs = readline().split(' ');
    const n1 = parseInt(inputs[0]);
    const n2 = parseInt(inputs[1]);
    graph.get(n1).add(n2);
    graph.get(n2).add(n1);
}

// Store gateway nodes
const gateways = new Set();
for (let i = 0; i < E; i++) {
    const ei = parseInt(readline());
    gateways.add(ei);
}

// BFS to find shortest path to any gateway
function findPathToGateway(start) {
    const queue = [[start, [start]]]; // [node, path]
    const visited = new Set([start]);
    
    while (queue.length > 0) {
        const [node, path] = queue.shift();
        
        // Check if current node is a gateway
        if (gateways.has(node)) {
            return path;
        }
        
        // Explore neighbors
        for (const neighbor of graph.get(node)) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, [...path, neighbor]]);
            }
        }
    }
    
    return null; // No path found
}

// Find the link to sever: the one closest to agent on path to gateway
function findLinkToSever(agentPos) {
    const path = findPathToGateway(agentPos);
    
    if (!path || path.length < 2) {
        // Fallback: sever any link connected to a gateway
        for (const gateway of gateways) {
            const neighbors = graph.get(gateway);
            if (neighbors.size > 0) {
                const neighbor = neighbors.values().next().value;
                return [gateway, neighbor];
            }
        }
        return null;
    }
    
    // Return the first link in the path (agent -> next node)
    return [path[0], path[1]];
}

// Game loop
while (true) {
    const SI = parseInt(readline()); // agent position
    
    const linkToSever = findLinkToSever(SI);
    
    if (linkToSever) {
        const [n1, n2] = linkToSever;
        
        // Remove the link from graph
        graph.get(n1).delete(n2);
        graph.get(n2).delete(n1);
        
        console.log(`${n1} ${n2}`);
    }
}
