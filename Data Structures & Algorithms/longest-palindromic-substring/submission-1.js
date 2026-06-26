class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        const n = s.length;
        if (n <= 1) return s;

        const dp = Array.from({ length: n }, () => Array(n).fill(false));
        let start = 0;
        let maxLen = 1;

        // All substrings of length 1 are palindromes
        for (let i = 0; i < n; i++) dp[i][i] = true;

        for (let len = 2; len <= n; len++) {
            for (let i = 0; i <= n - len; i++) {
                const j = i + len - 1;

                if (s[i] === s[j]) {
                    if (len === 2 || dp[i + 1][j - 1]) {
                        dp[i][j] = true;

                        if (len > maxLen) {
                            maxLen = len;
                            start = i;
                        }
                    }
                }
            }
        }

        return s.substring(start, start + maxLen);
    }
}
