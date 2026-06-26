class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const results = [];
        nums.sort((a, b) => a - b); // 🔑 Sort to bring duplicates together

        const backtrack = function(start, path) {
            results.push([...path]); // Save current subset

            for (let i = start; i < nums.length; i++) {
                // Skip duplicates on the same level
                if (i > start && nums[i] === nums[i - 1]) continue;

                path.push(nums[i]);              // Choose
                backtrack(i + 1, path);          // Explore
                path.pop();                      // Unchoose
            }
        }

        backtrack(0, []);
        return results;
    }
}
