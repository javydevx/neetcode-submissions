class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const memo = {};

        const dp = (i) => {
            if (i < 0) return 0;
            if (i in memo) return memo[i];

            const robThis = dp(i - 2) + nums[i];
            const skipThis = dp(i - 1);
            memo[i] = Math.max(robThis, skipThis);

            return memo[i];
        };

        return dp(nums.length - 1);
    }
}
