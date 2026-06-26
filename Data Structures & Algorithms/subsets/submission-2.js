class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const results = [];

        const backtrack = function(start, path) {
             results.push([...path]); // Save the current subset

            for (let i = start; i < nums.length; i++) {
                path.push(nums[i]);       // Choose
                backtrack(i + 1, path);   // Explore
                path.pop();               // Unchoose
            }
        }

        backtrack(0, []);
        return results;
    }
}
