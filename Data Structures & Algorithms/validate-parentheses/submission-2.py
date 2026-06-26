class Solution:
    def isValid(self, s: str) -> bool:
        brackets = {
            '[': ']',
            '(': ')',
            '{': '}'
        }

        stack = []
        for bracket in s:
            if bracket in brackets:
                stack.append(bracket)
            else:
                if not stack:
                    return False

                top = stack.pop()
                if brackets[top] != bracket:
                    return False
                
        return len(stack) == 0

''' 
1. if the bracket is either one of these 3: (, { or [ then we
push it to the stack
2. whenever we see closed bracket then if the popped item is
the opening bracket for the current closed then it's correct
'''