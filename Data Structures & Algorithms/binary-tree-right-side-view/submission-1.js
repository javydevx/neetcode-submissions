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
       let result = [];

        const dfs = (node, level) => {
            if (!node) return;
    
            // If this is the first time visiting this level, add the node
            if (level === result.length) {
                result.push(node.val);
            }
    
            // Visit right first, then left
            dfs(node.right, level + 1);
            dfs(node.left, level + 1);
        };
    
        dfs(root, 0);
        return result;
    }
}
