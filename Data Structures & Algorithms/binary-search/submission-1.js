class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const foundVal = nums[mid];
            if (foundVal === target) {
                return mid;
            } else if (foundVal < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
}
