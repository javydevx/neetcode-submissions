class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;  // Left pointer starts at the beginning
        let right = numbers.length - 1;  // Right pointer starts at the end

        while (left < right) {
            let sum = numbers[left] + numbers[right];  // Calculate sum of the two numbers

            if (sum === target) {
                // Since the problem is 1-indexed, we return left+1 and right+1
                return [left + 1, right + 1];
            } else if (sum < target) {
                // Move left pointer to the right to increase the sum
                left++;
            } else {
                // Move right pointer to the left to decrease the sum
                right--;
            }
        }
    }
}
