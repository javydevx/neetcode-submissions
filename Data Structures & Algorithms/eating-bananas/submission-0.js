class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let maxBananas = Math.max(...piles);

        for (let k = 1; k <= maxBananas; k++) {
            let totalHours = 0;

            for (let bananas of piles) {
                totalHours += Math.ceil(bananas / k);
            }

            if (totalHours <= h) {
                return k;
            }
        }
        return maxBananas;
    }
}
