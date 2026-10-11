class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        // Dp solution, O(m*n), space O(2*n) for curRow and prevRow
        // declare prevRow
        let prevRow = [];
        for(let i=0; i<n; i++) {
            prevRow.push(0);
        }

        // Start generating from last row
        for(let r=m-1; r>=0; r--) {
            // declare curRow
            const curRow = [];
            for(let i=0; i<n; i++) {
                curRow.push(0);
            }
            curRow[n-1] = 1;
            for(let c=n-2; c>=0; c--) {
                curRow[c] = curRow[c+1] + prevRow[c];
            }
            prevRow = curRow;
        }
        return prevRow[0];
    }
}
