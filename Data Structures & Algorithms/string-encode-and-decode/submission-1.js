class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        // delimiter - <wordLen>#
        for(let s of strs) {
            // Concat
            res += s.length.toString() + "#" + s;
        }
        // console.log("res: ", res);
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(!str) {
            return [];
        }
        let resultArr = [], i = 0;
        let wordLen = 0;
        console.log("str.length: ", str.length);
        console.log("str: ", str);
        while(i<str.length) {
            let j = i;
            console.log(str[j]);
            while(str[j] !== '#') {
                // console.log("str[j]: ", str[j]);
                // console.log(typeof str[j]);
                j++;
            }
            wordLen = +str.slice(i, j); // unary '+', convert str to Num
            console.log("wordLen: ", wordLen);
            // Extract word
            let word = str.slice(j + 1, j + 1 + wordLen);
            console.log("word: ", word);
            resultArr.push(word);
            // Update i
            i = j+1+wordLen;
        }
        return resultArr;
    }
}
