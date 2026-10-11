class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        // Note: For negative nums
        // Binary string representation
        // Shift by 0 to tackle negative nums
        // Un-signed right shift
        // const x = (n >>> 0).toString(2) // Base 2

        let count = 0;
        while(n>0) {
            if(n & 1) {
                count++;
            }
            n = n >>> 1;
        }
        return count;
    }
}
