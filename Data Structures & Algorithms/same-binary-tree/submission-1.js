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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        // Empty tree check
        if(!p && !q) {
            return true;
        }
        // Unequal with one of them empty
        if((!p && q) || (p && !q)) {
            return false;
        }

        if(p && q) {
            if(p.val !== q.val ) {
                return false;
            }
            
            // Call subTree
            if(!this.isSameTree(p.left, q.left)) {
                return false;
            }
            if(!this.isSameTree(p.right, q.right)) {
                return false;
            }

            return true;
        }
    }
}
