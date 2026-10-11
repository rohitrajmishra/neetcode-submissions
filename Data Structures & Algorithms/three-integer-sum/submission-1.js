class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // O(nlogn) + O(n)For each pass * O(n) for twoSum on sorted
        let res = []; // arrays of arrays(triplets)
        // Beware of sorting, js is funny when sorting -ve numbers
        // By default wihtout below callback, it sorts like -1, -2, -3, -4, 0, 1, 2, 3, 4
        nums = nums.sort(function(a, b) {
            return a - b;
        });
        // console.log("nums: ", nums);

        for(let i = 0; i<nums.length; i++) {
            // Skip for already processed item
            if(nums[i] === nums[i-1]) {
                continue;
            }
            // Two sum
            let l = i + 1, r = nums.length - 1;
            while(l < r) {
                const curSum = nums[i] + nums[l] + nums[r];
                if(curSum > 0) {
                    r--;
                }
                else if(curSum < 0) {
                    l++;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    // avoid duplicate triplet by checking for left pointer
                    l++;
                    while(nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
        }
        return res;
    }
}
