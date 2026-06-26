class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        // Create a set to store the unique numbers
        const numSet = new Set(nums);
        let longestStreak = 0;

        for (let num of numSet) {
            // Only start counting if 'num' is the start of a sequence
            if (!numSet.has(num - 1)) {
                let currentNum = num;
                let currentStreak = 1;

                // Count the length of the current sequence
                while (numSet.has(currentNum + 1)) {
                    currentNum++;
                    currentStreak++;
                }

                // Update the longest streak found
                longestStreak = Math.max(longestStreak, currentStreak);
            }
        }

        return longestStreak;
    }

}
