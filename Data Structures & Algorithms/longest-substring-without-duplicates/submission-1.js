class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let checkSet = new Set();
        let size = s.length;
        let L = 0, R = 0;
        let maxSubLen = 0; // R - L
        while(R<size) {
            // console.log("maxSubLen: ", maxSubLen);
            // console.log("left -> ", s[L]);
            // console.log("right -> ", s[R]);
            if(!checkSet.has(s[R])) {
                checkSet.add(s[R]);
                R++;
                let curSubLen = R - L;
                if(curSubLen > maxSubLen) {
                    maxSubLen = curSubLen;
                }
            } else {
                checkSet.delete(s[L]);
                L++;
            }
        }
        return maxSubLen;
    }
}
