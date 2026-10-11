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
    getHeight(root) {
        if(!root) {
            return 0;
        }
        return 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
    }
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        if(!root) {
            return true;
        }

        // Check left child is balanced
        let checkLeftBalanced = this.isBalanced(root.left);
        if(!checkLeftBalanced) {
            return false;
        }

        // Check right child is balanced
        let checkRightBalanced = this.isBalanced(root.right);
        if(!checkRightBalanced) {
            return false;
        }

        // Check self balance
        let leftH = this.getHeight(root.left);
        let rightH = this.getHeight(root.right);

        let diffH = Math.abs(leftH - rightH);
        if(diffH <= 1) {
            return true;
        }
        return false;
    }
}
