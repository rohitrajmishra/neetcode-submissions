class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        const size = ROWS * COLS;
        let l = 0, r = size - 1;
        
        while(l<=r) {
            let mid = Math.floor((l + r) / 2);
            let i = Math.floor(mid/COLS);
            let j = mid % COLS;
            if(target < matrix[i][j]) {
                r = mid - 1;
            } else if(target > matrix[i][j]) {
                l = mid + 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
