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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let stack = [];

        while (true) {
            while (root) {
                stack.push(root);
                root = root.left; // Go left
            }

            root = stack.pop(); // Process node
            k--;

            if (k === 0) return root.val; // Found k-th smallest

            root = root.right; // Go right
        };
    }
}
