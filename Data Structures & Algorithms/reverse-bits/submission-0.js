class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let res = 0;

        for (let i = 0; i < 32; i++) {
            const lastBit = n & 1;  // get last bit
            res = (res << 1) | lastBit; // shift res and add bit
            n >>>= 1; // shift n to the right
        }

        return res >>> 0; // ensure unsigned 32-bit result
    }
}
