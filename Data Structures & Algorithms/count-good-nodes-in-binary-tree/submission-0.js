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
    goodNodes(root) {
        const dfs = (node, maxSoFar) => {
            if (!node) return 0;

            let count = 0;
            if (node.val >= maxSoFar) {
                count = 1;
            }

            // Update maxSoFar for children
            maxSoFar = Math.max(maxSoFar, node.val);

            // Recur for left and right subtrees
            count += dfs(node.left, maxSoFar);
            count += dfs(node.right, maxSoFar);

            return count;
        };

        return dfs(root, root.val);
    }
}
