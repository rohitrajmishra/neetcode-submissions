class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let L = 0, R = nums.length - 1;

        // Note: constraing all no. are unique
        while(L<R) {
            let mid = Math.floor((L + R) / 2);
            // Check anomaly
            if(nums[mid] > nums[R]) { // min is on Right side
                L = mid + 1;
            } else { // Right side don't have min
                R = mid;
            }
        }
        // Last element
        return nums[L];
    }
}
