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
     * @return {boolean}
     */
    isValidBST(root) {
        const validate = (node, min, max) => {
        if (!node) return true;

        // The current node must be within the range
        if (node.val <= min || node.val >= max) return false;

        // Recur for left (max updated) and right (min updated) subtrees
        return validate(node.left, min, node.val) &&
            validate(node.right, node.val, max);
    }

    return validate(root, -Infinity, Infinity);
    }
}
