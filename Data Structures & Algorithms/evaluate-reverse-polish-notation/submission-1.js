class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const operators = ['+','-','*','/'];
        const stack = [];
        for(let i=0;i<tokens.length;i++) {
            if(operators.includes(tokens[i])) {
                console.log('perform: ', tokens[i])
                let op2 = +stack.pop();
                let op1 = +stack.pop();

                let result = 0;
                switch(tokens[i]) {
                    case '+': 
                        result = op1 + op2;
                        break;
                    case '-': 
                        result = op1 - op2;
                        break;
                    case '*': 
                        result = op1 * op2;
                        break;
                    case '/': 
                        result = Math.trunc(op1 / op2);
                        break;
                    default:
                        result = 0;
                }
                stack.push(result);
            } else {
                stack.push(tokens[i]);
            }
            console.log(`pass ${i}: stack: `);
            console.log(stack)
        }
        // return final answer
        return stack.pop();
    }
}
