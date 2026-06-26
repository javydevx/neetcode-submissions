class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;
        if (n === 1) return nums[0];

        const robLinear = (arr) => {
            let rob1 = 0, rob2 = 0;
            for (let num of arr) {
                const newRob = Math.max(rob2, rob1 + num);
                rob1 = rob2;
                rob2 = newRob;
            }
            return rob2;
        }

        return Math.max(
            robLinear(nums.slice(0, n - 1)), // Exlude last
            robLinear(nums.slice(1))         // Exclude first
        );
    }
}
