class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const results = [];
        const used = new Array(nums.length).fill(false);

        const backtrack = function(path) {
            if (path.length === nums.length) {
                results.push([...path]);
                return;
            }

            for (let i = 0; i < nums.length; i++) {
                if (used[i]) continue; // skip if already used

                used[i] = true; // mark as used
                path.push(nums[i]); // choose
                backtrack(path); // explore
                path.pop(); // unchoose
                used[i] = false; // unmark
            }
        }

        backtrack([]);
        return results;
    }
}
