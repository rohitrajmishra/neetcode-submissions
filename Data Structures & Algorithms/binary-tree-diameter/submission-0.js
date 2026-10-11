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
    getHeightAndMaxDiameter(root, res) {
        if(!root) {
            return 0; // Return height
        }
        const leftH = this.getHeightAndMaxDiameter(root.left, res);
        const rightH = this.getHeightAndMaxDiameter(root.right, res);
        const d = leftH + rightH;
        const height = 1 + Math.max(leftH, rightH);
        if(d > res.diameter) {
            res.diameter = d;
        }
        return height;
    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        //For passing by ref, using array/object
        const result = {
            diameter: 0
        }
        // Recursive call to cal. leftH + rightH and update maxD
        this.getHeightAndMaxDiameter(root, result);
        return result.diameter;
    }
}
