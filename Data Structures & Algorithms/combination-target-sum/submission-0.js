class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        const backtrack = function(start, path, currentSum) {
            if (currentSum === target) {
                result.push([...path]);
                return;
            }
            if (currentSum > target) return;
            for (let i = start; i < nums.length; i++) {
                path.push(nums[i]);
                backtrack(i, path, currentSum + nums[i]);
                path.pop();
            }
        }

        backtrack(0, [], 0);
        return result;
    }
}
