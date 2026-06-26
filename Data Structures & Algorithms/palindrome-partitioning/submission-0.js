class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const result = [];

        // Helper function to check palindrome
        const isPalindrome = (str, left, right) => {
            while (left < right) {
                if (str[left++] !== str[right--]) return false;
            }
            return true;
        };

        const backtrack = (start, path) => {
            // If we reached the end of the string, push the current partition
            if (start === s.length) {
                result.push([...path]);
                return;
            }

            // Explore all substrings starting from 'start'
            for (let end = start; end < s.length; end++) {
                if (isPalindrome(s, start, end)) {
                    path.push(s.substring(start, end + 1)); // choose
                    backtrack(end + 1, path); // explore
                    path.pop(); // un-choose (backtrack)
                }
            }
        };

        backtrack(0, []);
        return result;
    }
}
