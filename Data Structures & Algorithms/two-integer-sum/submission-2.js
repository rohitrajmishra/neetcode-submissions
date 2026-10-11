class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const obj = {}
        for(let i =0; i<nums.length; i++) {
            obj[nums[i]] = i;
        }

        for(let i =0; i<nums.length; i++) {
            const key = nums[i]
            const toFind = target - key;
            if(obj.hasOwnProperty(toFind)) {
                const indexA = i;
                const indexB = obj[toFind];

                if(indexA === indexB) {
                    continue;
                }
                if(indexA < indexB) {
                    return [indexA, indexB]
                } else {
                    return [indexB, indexA]
                }
            }
        }
    }
}
