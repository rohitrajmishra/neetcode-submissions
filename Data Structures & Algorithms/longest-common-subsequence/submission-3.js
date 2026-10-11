class Solution {
    // O(2^n), space fn calls in stack -> O(2^n)
    bruteForce(s1, s2, i1, i2) {
        const len1 = s1.length;
        const len2 = s2.length;

        if(i1 >= len1 || i2>=len2 || len1 === 0 || len2 === 0) {
            return 0;
        }

        if(s1[i1] === s2[i2]) {
            return 1 + this.bruteForce(s1, s2, i1+1, i2+1);
        }
        return Math.max(this.bruteForce(s1, s2, i1+1, i2), 
                        this.bruteForce(s1, s2, i1, i2+1));
    }
    memoized(s1, s2, i1, i2, cache) {
        // console.log(cache);
        const len1 = s1.length;
        const len2 = s2.length;

        if(i1 >= len1 || i2>=len2 || len1 === 0 || len2 === 0) {
            return 0;
        }

        let res;
        // If valid indexes check value in cache first
        if(cache[i1][i2] !== -1) {
            return cache[i1][i2];
        }

        if(s1[i1] === s2[i2]) {
            res = 1 + this.memoized(s1, s2, i1+1, i2+1, cache);
            // Update cache
            cache[i1][i2] = res;
            return res;
        }
        res = Math.max(this.memoized(s1, s2, i1+1, i2, cache), 
                        this.memoized(s1, s2, i1, i2+1, cache));
        // Update cache
        cache[i1][i2] = res;
        return res;
    }
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        // return this.bruteForce(text1, text2, 0, 0);
        const ROWS = text1.length;
        const COLS = text2.length;
        const cache = Array(ROWS).fill().map(() => Array(COLS).fill(-1));
        // console.log(cache);
        return this.memoized(text1, text2, 0, 0, cache);
    }
}
