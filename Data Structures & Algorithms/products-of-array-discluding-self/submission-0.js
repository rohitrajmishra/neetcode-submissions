class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const size = nums.length;

        let leftProductArr = [];
        let rightProductArr = [];
        let resultArr = [];

        let leftP = 1, rightP = 1;
        // Calculate preFetchProduct arrays
        for(let i=0; i<size; i++) {
            leftP *= nums[i];
            leftProductArr.push(leftP);
            rightP *= nums[size - 1 - i];
            rightProductArr.push(rightP);
        }

        for(let i=0; i<size; i++) {
            // Safegurad rails
            let leftP = 1;
            let rightP = 1;

            let leftPIndex = i - 1;
            let rightPIndex = size - 1 - (i+1);

            if(leftPIndex >=0 ) {
                leftP = leftProductArr[leftPIndex];
            }
            if(rightPIndex >=0 ) {
                rightP = rightProductArr[rightPIndex];
            }

            resultArr.push(leftP * rightP);
        }
        return resultArr;
    }
}
