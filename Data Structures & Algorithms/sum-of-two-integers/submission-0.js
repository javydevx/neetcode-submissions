class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        while (b !== 0) {
            let carry = (a & b) << 1;  // carry bits
            a = a ^ b;                 // sum bits
            b = carry;                 // continue with carry
        }
        return a;
    }
}
