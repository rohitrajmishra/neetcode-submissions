class Solution {
    #nonAlphaNumPattern = /[^a-z0-9]/gi
    filterNonAlphaNumeric(s) {
        return s.toLowerCase().replace(this.#nonAlphaNumPattern, '');
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanStr = this.filterNonAlphaNumeric(s);
        let L = 0;
        let R = cleanStr.length - 1;
        while(L<R) {
            if(cleanStr[L] !== cleanStr[R]) {
                return false;
            }
            L++;
            R--;
        }
        return true;
    }
}
