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

        const dfs = (curr) => {
            if (visited.has(curr)) {
                return visited.get(curr); // Already cloned
            }

            const copy = new Node(curr.val); // Create a clone
            visited.set(curr, copy); // Mark as cloned

            for (const neighbor of curr.neighbors) {
                copy.neighbors.push(dfs(neighbor)); // Recursively clone neighbors
            }

            return copy;
        }

        return dfs(node);
    }
}
