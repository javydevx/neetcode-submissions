class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let xor = 0;
        const n = nums.length;

        for (let i = 0; i <= n; i++) {
            xor ^= i;
        }

        for (let num of nums) {
            xor ^= num;
        }

        return xor;
    }
}
