class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let L=0
        let R=numbers.length - 1
        while(L<R) {

            const sum = numbers[L] + numbers[R]
            if(sum === target) {
                return [L+1, R+1] // 1-indexed
            } else if(sum < target) {
                L++;
            } else {
                R--;
            }
        }
        // There will always be exactly one valid solution, so below return is just for safety
        return [-1, -1]
    }
}
