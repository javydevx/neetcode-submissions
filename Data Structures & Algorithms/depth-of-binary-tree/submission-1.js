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
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if (!root) return 0; // Edge case: if tree is empty

        let queue = [root];
        let depth = 0;

        while (queue.length > 0) {
            let size = queue.length; // Number of nodes in current level
            for (let i = 0; i < size; i++) {
                let node = queue.shift(); // Remove front node

                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            depth++; // Increase depth after processing a level
        }
        return depth;
    }
}
