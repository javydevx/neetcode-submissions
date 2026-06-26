class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        const n = s.length;
        let count = 0;
        const dp = Array.from({ length: n }, () => Array(n).fill(false));

        for (let len = 1; len <= n; len++) {
            for (let i = 0; i <= n - len; i++) {
                const j = i + len - 1;

                if (s[i] === s[j]) {
                    if (len <= 2 || dp[i + 1][j - 1]) {
                        dp[i][j] = true;
                        count++;
                    }
                }
            }
        }

        return count;
    }
}
