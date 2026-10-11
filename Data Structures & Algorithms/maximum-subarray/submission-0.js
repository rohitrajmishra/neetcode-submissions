class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = nums[0];
        let curSum = 0;

        for(let n of nums) {
            // If curSum < 0, slide and close the window
            if(curSum < 0) {
                curSum = 0;
            }

            curSum += n;
            if(curSum > maxSum) {
                maxSum = curSum;
            }
        }

        return maxSum;
    }
}
