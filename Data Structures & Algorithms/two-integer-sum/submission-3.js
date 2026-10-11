class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const prevMap = {}
        for(let i =0; i<nums.length; i++) {
            const x = target - nums[i];
            if(prevMap.hasOwnProperty(x)) {
                return [prevMap[x], i];
            }
            prevMap[nums[i]] = i;
        }
    }
}
