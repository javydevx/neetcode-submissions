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
        // Convert trees to string representation
        const treeToString = (node) => {
            if (!node) return "null";
            return `#${node.val} ${treeToString(node.left)} ${treeToString(node.right)}`;
        };

        let rootStr = treeToString(root);
        let subRootStr = treeToString(subRoot);
    
        return rootStr.includes(subRootStr);
    }
}
