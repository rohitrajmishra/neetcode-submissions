
function checkAlphaNum(code) {
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
    }
    return true;
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let start = 0;
        let end = s.length - 1;
        
        while(start < end) {
            // console.log(s[start], s[end])
            let code;
            code = s.charCodeAt(start);
            if(!checkAlphaNum(code)) {
                start++;
                continue
            }
            code = s.charCodeAt(end)
            if(!checkAlphaNum(code)) {
                end--;
                continue
            }
            
            if(s[start].toLowerCase() !== s[end].toLowerCase()) {
                return false;
            }

            start++;
            end--;
        }

        return true;
    }
}
