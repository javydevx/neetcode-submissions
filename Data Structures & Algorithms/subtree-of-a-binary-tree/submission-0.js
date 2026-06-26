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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root) return false; // Base case: root is null, subRoot cannot be found
        if (this.isSameTree(root, subRoot)) return true; // Check if current root matches subRoot

        // Recursively check left and right subtrees
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    isSameTree(p, q) {
        if (!p && !q) return true; // Both null -> identical
        if (!p || !q || p.val !== q.val) return false; // Mismatch

        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }
}
