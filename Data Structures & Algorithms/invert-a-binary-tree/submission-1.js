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
        if (!root) return null; // If the tree is empty

        let queue = [root]; // Initialize queue with root

        while (queue.length > 0) {
            let node = queue.shift(); // Remove the front node

            // Swap left and right children
            let temp = node.left;
            node.left = node.right;
            node.right = temp;

            // Add children to the queue for processing
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return root;
    }
}
