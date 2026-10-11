
function checkAlphaNum(code) {
    if (!(code >= 48 && code <= 57) && // numeric (0-9)
        !(code >= 65 && code <= 90) && // upper alpha (A-Z)
        !(code >= 97 && code <= 122)) { // lower alpha (a-z)
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
