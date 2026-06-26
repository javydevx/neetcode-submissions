class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        const unique = new Set(nums);
        let setSum = 0;
        for (let num of unique) setSum += num;

        let totalSum = 0;
        for (let num of nums) totalSum += num;

        return 2 * setSum - totalSum;
    }
}
