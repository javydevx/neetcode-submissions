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
        if (!p && !q) return true; // Both nodes are null -> trees are identical
        if (!p || !q) return false; // One node is null -> different structure
        if (p.val !== q.val) return false; // Different values -> not identical

        // Recursively check left and right subtrees
        return this.isSameTree(p.left, q.left) && 
            this.isSameTree(p.right, q.right);
    }
}
