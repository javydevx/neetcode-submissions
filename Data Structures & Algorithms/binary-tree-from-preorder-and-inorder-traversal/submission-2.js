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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let inMap = new Map();
        inorder.forEach((val, index) => inMap.set(val, index));
    
        let preIndex = 0;
    
        const construct = (left, right) => {
            if (left > right) return null;
    
            let rootVal = preorder[preIndex++];
            let root = new TreeNode(rootVal);
    
            let mid = inMap.get(rootVal);
    
            root.left = construct(left, mid - 1);
            root.right = construct(mid + 1, right);
    
            return root;
        };
    
        return construct(0, inorder.length - 1);
    }
}
