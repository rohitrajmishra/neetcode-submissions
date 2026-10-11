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
    helperGetK(root, defaultK, k) {
        let leftK, rightK, rootK, res;
        if(!root) {
            return [defaultK, null]
        }

        // return [myK, res(if found)]
        [leftK, res] = this.helperGetK(root.left, 0, k);
        // console.log("leftK: ", leftK, root.val);
        if(res) {
            return [leftK + defaultK, res];
        }
        rootK = defaultK + leftK + 1;
        // console.log("rootK: ", rootK, root.val);

        if(rootK === k) {
            return [rootK, root.val];
        }
        // Check in right subTree, rightSub tree will be greater than root, so defaultK will +1
        [rightK, res] = this.helperGetK(root.right, rootK, k);
        // console.log("rightK: ", rightK, root.val);
        if(res) {
            return [rightK, res];
        }
        // maxK here is rightK, root will be +1 of that
        return [rightK, null];
    }
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let resultK, res;
        [resultK, res] = this.helperGetK(root, 0, k);
        if(res) {
            return res;
        } else { //No result
            return -1;
        }
    }
}
