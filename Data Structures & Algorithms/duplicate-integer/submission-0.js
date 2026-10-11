class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let aHash = {}
        for(let i=0;i<nums.length;i++) {
            // console.log(nums[i])
            if(nums[i] in aHash) {
                return true;
            }
            aHash[nums[i]] = true;
        }
        return false;
    }
}
