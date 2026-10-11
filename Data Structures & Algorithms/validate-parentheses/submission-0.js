class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let arr = [];
        const bracPair = {
            ')': '(',
            '}': '{',
            ']': '['
        }

        // let openBracList = ['(', '{', '[']; 
        let closeBracList = [')', '}', ']'];
        for(let i = 0; i<s.length; i++) {
            const item = s[i];
            if(item === '(' || 
                item === '{' ||
                item === '[') {
                arr.push(item);
                // console.log(arr)
            } else if(closeBracList.includes(item)) {
                // console.log("item: ", item)
                // console.log(bracPair[item])
                if(bracPair[item] === arr[arr.length - 1]) {
                    // console.log('Popping...')
                    arr.pop()
                } else {
                    return false; //fail
                }
            }
        }
        return arr.length === 0;
    }
}
