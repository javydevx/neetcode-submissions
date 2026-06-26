class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = new Array(26).fill(0);
        let left = 0, right = 0, maxCount = 0, maxLength = 0;

        while (right < s.length) {
            const index = s.charCodeAt(right) - 65;
            count[index]++;
            maxCount = Math.max(maxCount, count[index]);

            while ((right - left + 1) - maxCount > k) {
                count[s.charCodeAt(left) - 65]--;
                left++;
            }
            maxLength = Math.max(maxLength, right - left + 1);
            right++;
        }
        return maxLength;
    }
}
