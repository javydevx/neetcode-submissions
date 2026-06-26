class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = [];
        this.backtrack(nums, [], 0, result);
        return result;
    }

    backtrack(nums, path, index, result) {
        result.push([...path]); // store valid subset
        for (let i = index; i < nums.length; i++) {
            path.push(nums[i]); //choose
            this.backtrack(nums, path, i+1, result); // explore
            path.pop(); // undo
        }
    }
}
