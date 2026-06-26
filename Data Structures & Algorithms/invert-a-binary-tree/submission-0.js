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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) return null; // Base case: If node is null, return null

        // Swap left and right subtree
        let temp = root.left;
        root.left = root.right;
        root.right = temp;

        // Recursively invert left and right subtrees
        this.invertTree(root.left);
        this.invertTree(root.right);

        return root; // Return the root of the inverted tree;
    }
}
