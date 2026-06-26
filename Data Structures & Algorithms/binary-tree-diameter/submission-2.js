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
    diameterOfBinaryTree(root) {
        let maxDiameter = 0;

        function dfs(node) {
            if (!node) return 0;

            let leftDepth = dfs(node.left);
            let rightDepth = dfs(node.right);

            maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

            return Math.max(leftDepth, rightDepth) + 1;
        }

        dfs(root);
        return maxDiameter;
    }
}
