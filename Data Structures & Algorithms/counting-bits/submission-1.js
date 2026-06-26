class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const ans = [];

        const countOnes = (num) => {
            let count = 0;
            while (num !== 0) {
                num &= (num - 1);
                count++;
            }
            return count;
        };

        for (let i = 0; i <= n; i++) {
            ans.push(countOnes(i));
        }

        return ans;
    }
}
