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

        // Function to find hegith of the tree
        const findHeight = (node) => {
            if (!node) return 0;
            return 1 + Math.max(findHeight(node.left), findHeight(node.right));
        };

        // Function to get nodes at a specific level
        const getLevelNodes = (node, level, result) => {
            if (!node) return;
            if (level === 1) {
                result.push(node.val);
            } else {
                getLevelNodes(node.left, level - 1, result);
                getLevelNodes(node.right, level - 1, result);
            }
        };

        let height = findHeight(root);
        let result = [];

        // Traverse level by level
        for (let i = 1; i <= height; i++) {
            let levelNodes = [];
            getLevelNodes(root, i, levelNodes);
            result.push(levelNodes);
        }

        return result;
    }
}
