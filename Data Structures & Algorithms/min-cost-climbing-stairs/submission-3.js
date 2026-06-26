class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const memo = {};

        const dp = (i) => {
            if (i <= 1) return 0;  // Base case: we can start at 0 or 1 for free
            if (memo[i] !== undefined) return memo[i];

            memo[i] = Math.min(
                dp(i - 1) + cost[i - 1],
                dp(i - 2) + cost[i - 2]
            );
            return memo[i];
        };

        return dp(cost.length);  // Top is 1 step after last index
    }
}
