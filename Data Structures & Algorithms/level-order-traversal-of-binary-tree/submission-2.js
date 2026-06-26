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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];

        let result = [];
        let queue = [root]; // Start with root node
        console.log("Queue: ", queue);

        while (queue.length > 0) {
            let levelSize = queue.length; // Number of nodes in this level
            let levelNodes = [];

            for (let i = 0; i < levelSize; i++) {
                let node = queue.shift(); // Remove the first node in the queue
                levelNodes.push(node.val);

                // Add left and right children to the queue
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }

            result.push(levelNodes); // Add this level's values to result
        }
        return result;
    }
}
