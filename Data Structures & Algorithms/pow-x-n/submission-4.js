class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        if (n === 0) return 1;

        // Handle negative exponents
        if (n < 0) {
            x = 1 / x;
            n = -n;
        }

        const half = this.myPow(x, Math.floor(n / 2));

        if (n % 2 === 0) {
            return half * half;
        } else {
            return half * half * x;
        }
    }
}
