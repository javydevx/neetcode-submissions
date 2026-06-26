class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        while (stones.length > 1) {
            stones.sort((a, b) => b - a); // Sort stones in descending order
            const y = stones.shift();     // largest stone
            const x = stones.shift();     // second largest stone

            if (x !== y) {
                stones.push(y - x);
            }
        }

        return stones.length === 1 ? stones[0] : 0;
    }
}
