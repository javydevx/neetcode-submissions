/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */ 
    cloneGraph(node) {
        if (!node) return null;

        const visited = new Map();
        const queue = [node];
        

        // Clone the starting node and store it
        visited.set(node, new Node(node.val));

        while (queue.length > 0) {
            const curr = queue.shift();

            for (const neighbor of curr.neighbors) {
                if (!visited.has(neighbor)) {
                    // Clone neighbor and mark visited
                    visited.set(neighbor, new Node(neighbor.val));
                    queue.push(neighbor);
                }
                // Add neighbor clone to the current clone's neighbors
                visited.get(curr).neighbors.push(visited.get(neighbor));
            }
        }

        return visited.get(node);
    }
}
