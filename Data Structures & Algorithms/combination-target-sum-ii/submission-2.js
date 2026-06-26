class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const result = [];
        candidates.sort((a, b) => a - b); // Sort to handle duplicates

        const backtrack = function(start, path, total) {
            if (total === target) {
                result.push([...path]);
                return;
            }

            if (total > target) return;  // No need to continue if sum is already too big

            for (let i = start; i < candidates.length; i++) {
                // Skip duplicates on the same level
                if (i > start && candidates[i] === candidates[i - 1]) continue;

                path.push(candidates[i]); // Choose the number
                backtrack(i + 1, path, total + candidates[i]); // Go deeper (use i + 1 because we can't use)
                path.pop(); // Undo the choice
            }
        }

        backtrack(0, [], 0);
        return result;
    }
}
