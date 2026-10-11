class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const obj = {};
        
        // pre-check
        if(s.length !== t.length) {
            return false;
        }

        for(let i=0; i<s.length; i++) {
            const key = s[i]
            console.log(key, obj.hasOwnProperty(key))
            if(obj.hasOwnProperty(key)) {
                obj[key] += 1;
                // console.log(key, obj[key])
            } else {
                obj[key] = 1;
            }
        }

        // console.log(obj)
        for(let i=0; i<t.length; i++) {
            const key = t[i]
            if(!obj.hasOwnProperty(key)) {
                return false;
            } else {
                if(obj[key] < 1) {
                    return false;
                }
                obj[key] -= 1;
            }
        }
        return true;
    }
}
