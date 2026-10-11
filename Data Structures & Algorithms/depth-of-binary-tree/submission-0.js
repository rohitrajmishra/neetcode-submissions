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
     * @return {number}
     */
    maxDepth(root) {
        let leftDepth = 0, rightDepth = 0;
        if(!root) {
            return 0;
        }
        if(root.left) {
            leftDepth = this.maxDepth(root.left);
        }
        if(root.right) {
            rightDepth = this.maxDepth(root.right);
        }
        // MaxDepth is maxDepth of child + 1
        return 1 + Math.max(leftDepth, rightDepth);
    }
}
