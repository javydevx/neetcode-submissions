class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);

        const canFinish = (k) => {
            let totalHours = 0;
            for (let bananas of piles) {
                totalHours += Math.ceil(bananas / k);
            }
            return totalHours <= h;
        };

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (canFinish(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }
}
