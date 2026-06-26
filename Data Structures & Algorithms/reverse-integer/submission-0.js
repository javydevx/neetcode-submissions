class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let res = 0;
        const INT_MAX = 2 ** 31 - 1;
        const INT_MIN = -(2 ** 31);

        while (x !== 0) {
            let digit = x % 10;
            x = Math.trunc(x / 10); // Remove last digit (floor toward zero)

            // Overflow check
            if (res > Math.trunc(INT_MAX / 10) || (res === Math.trunc(INT_MAX / 10) && digit > 7)) return 0;
            if (res < Math.trunc(INT_MIN / 10) || (res === Math.trunc(INT_MIN / 10) && digit < -8)) return 0;

            res = res * 10 + digit;
        }
        return res;
    }
}
