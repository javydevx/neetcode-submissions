class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    
    hasDuplicate(nums) {
        nums.sort((a, b) => a - b)
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) {
                return true
            }
        }
        return false
    }

    /*
    hasDuplicate(nums) {
        // nums = [1,2,3,4]
        let seen = new Set()
        for (let num of nums) {
            if (seen.has(num)) {
                return true
            }
            seen.add(num)
        }
        return false
    }
    */
}
