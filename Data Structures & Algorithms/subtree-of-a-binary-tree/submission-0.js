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
    isSameTree(root, subRoot) {
        if(!root && !subRoot) {
            return true;
        }
        if(root && subRoot) {
            if(root.val == subRoot.val) {
                return (this.isSameTree(root.left, subRoot.left) 
                && this.isSameTree(root.right, subRoot.right))
            }
        }
        return false;// One of them is non-empty, so can't be same
    }
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        // null subTree is subTree of everything
        if(!subRoot) {
            return true;
        }
        // Subtree is non-empty, but tree is empty
        if(!root) {
            return false;
        }
        // Check recursively
        return (this.isSameTree(root, subRoot) || 
                this.isSubtree(root.left, subRoot) || 
                this.isSubtree(root.right, subRoot))
    }
}
