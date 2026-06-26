class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const validOperators = ["+", "-", "*", "/"];
        let stack = [];
        for (let token of tokens) {
            if (!validOperators.includes(token)) {
                stack.push(parseInt(token));
            } else {
                let a = stack.pop();
                let b = stack.pop();
                switch(token) {
                    case "+":
                        stack.push(b + a);
                        break;
                    case "-":
                        stack.push(b - a);
                        break;
                    case "*":
                        stack.push(b * a);
                        break;
                    case "/":
                        stack.push(Math.trunc(b / a));
                        break;
                }
            }
        }
        return stack.pop();
    }
}
