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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return [];

        let result = [];
        let queue = [root];
    
        while (queue.length > 0) {
            let levelSize = queue.length;
            let lastNode = null;
    
            for (let i = 0; i < levelSize; i++) {
                let node = queue.shift();
                lastNode = node; // Keep updating to the last node
    
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
    
            result.push(lastNode.val); // Store last node at this level
        }
    
        return result;
    }
}
