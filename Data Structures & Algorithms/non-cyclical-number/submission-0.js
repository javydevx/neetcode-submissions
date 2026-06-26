class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const seen = new Set();

        const getDigitSquareSum = (num) => {
            let sum = 0;
            while (num > 0) {
                let digit = num % 10;
                sum += digit * digit;
                num = Math.floor(num / 10);
            }
            return sum;
        }

        while (n !== 1) {
            if (seen.has(n)) return false;
            seen.add(n);
            n = getDigitSquareSum(n);
        }

        return true;
    }
}
