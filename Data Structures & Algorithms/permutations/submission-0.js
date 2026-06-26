class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const results = [];

        const generate = function(path) {
            if (path.length === nums.length) {
                const set = new Set(path);
                if (set.size === nums.length) {
                    results.push([...path]);
                }
                return;
            }

            for (let i = 0; i < nums.length; i++) {
                path.push(nums[i]);
                generate(path);
                path.pop();
            }
        }

        generate([]);
        return results;
    }
}
