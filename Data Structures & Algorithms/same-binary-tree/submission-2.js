/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        let queue = [[p, q]];
    
        while (queue.length > 0) {
            let [node1, node2] = queue.shift();
    
            if (!node1 && !node2) continue; // Both null -> continue
            if (!node1 || !node2 || node1.val !== node2.val) return false; // Mismatch
    
            queue.push([node1.left, node2.left]);
            queue.push([node1.right, node2.right]);
        }
    
        return true;
    }
}
