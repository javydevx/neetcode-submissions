class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            // If mid is greater than right, min is on the right side
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                // Min is on the left side or is mid itself
                right = mid;
            }
        }

        // Left and right converge to the minimum element
        return nums[left];
    }
}
