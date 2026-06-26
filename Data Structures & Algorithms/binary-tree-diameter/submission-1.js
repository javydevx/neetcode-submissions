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
        if (!root) return 0;

        let leftDepth = this.depth(root.left);
        let rightDepth = this.depth(root.right);

        let diameterThroughRoot = leftDepth + rightDepth;

        // Recursively find the diameter of left and right subtree
        let leftDiameter = this.diameterOfBinaryTree(root.left); 
        let rightDiameter = this.diameterOfBinaryTree(root.right); 
    
        return Math.max(diameterThroughRoot, leftDiameter, rightDiameter);
    }

    // Helper function to find the height of a tree
    depth(node) {
        if (!node) return 0;
        return Math.max(this.depth(node.left), this.depth(node.right)) + 1;
    }
}
