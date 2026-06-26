class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(heights) {
        let total = 0;
        let left = 0;
        let right = heights.length - 1;
        let leftMax = 0;
        let rightMax = 0;

        while (left < right) {
            leftMax = Math.max(leftMax, heights[left]);
            rightMax = Math.max(rightMax, heights[right]);

            if (leftMax < rightMax) {
                total += leftMax - heights[left];
                left++;
            } else {
                total += rightMax - heights[right];
                right--;
            }
        }

        return total;
    }
}
