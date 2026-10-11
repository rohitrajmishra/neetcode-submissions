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
        const result = [];
        const q = [];
        if(!root) {
            return result;
        }

        let levelNodes = [];
        q.push(root);
        // push null as separator for each level
        q.push(null);

        while(q.length > 0) { 
            let cur = q.shift();

            // Base case q has last separator null, and levelNodes empty
            if(!cur && levelNodes.length === 0) {
                continue;
                // No need to add any further separator, otherwisse infinite loop due to null
            }
            // Check if current level finished
            if(!cur) {
                result.push(levelNodes);
                q.push(null);
                // Reset
                levelNodes = [];
                continue;
            }

            levelNodes.push(cur.val);
            if(cur.left) {
                q.push(cur.left);
            }
            if(cur.right) {
                q.push(cur.right);
            }
        }
        return result;
    }
}
