class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const len1 = s1.length;
        const len2 = s2.length;

        const count1 = new Array(26).fill(0);
        const count2 = new Array(26).fill(0);

        // Populate the freq array for s1
        for (let i = 0; i < len1; i++) {
            count1[s1.charCodeAt(i) - 97]++;
            count2[s2.charCodeAt(i) - 97]++;
        }

        // Compare the freq arrays
        const matches = (arr1, arr2) => {
            for (let i = 0; i < 26; i++) {
                if (arr1[i] !== arr2[i]) return false;
            }
            return true;
        }

        // Slide window over s2
        for (let i = len1; i < len2; i++) {
            if (matches(count1, count2)) return true;
            count2[s2.charCodeAt(i) - 97]++;
            count2[s2.charCodeAt(i - len1) - 97]--;
        }

        return matches(count1, count2);
    }
}