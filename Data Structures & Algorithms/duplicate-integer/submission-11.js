class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    hasDuplicate(nums) {
        const seen = {};
        for (const num of nums) {
            if (seen[num]) {
                return true;
            }
            seen[num] = true;
        }
        return false;
    }

    /*
    hasDuplicate(nums) {
        const seen = new Set();
        for (const num of nums) {
            if (seen.has(num)) {
                return true;
            }
            seen.add(num);
        }
        return false;
    }
    */
}
