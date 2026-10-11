class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(nums) {
        let L=0, R = nums.length - 1;
        let maxArea = 0;

        while(L<R) {
            let distance = R - L;
            let smallerNum, indexOfSmallerNum;
            if(nums[L] <= nums[R]) {
                smallerNum = nums[L];
                L++;
            } else {
                smallerNum = nums[R];
                R--;
            }

            let area = smallerNum * distance;

            // update
            if(area > maxArea) {
                maxArea = area;
            }
        }
        return maxArea;
    }
}
