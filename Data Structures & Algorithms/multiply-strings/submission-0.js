class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1, num2) {
        if (num1 === "0" || num2 === "0") return "0";

        const m = num1.length;
        const n = num2.length;
        const res = new Array(m + n).fill(0);

        for (let i = m - 1; i >= 0; i--) {
            const digit1 = num1.charCodeAt(i) - '0'.charCodeAt(0);
            for (let j = n - 1; j >= 0; j--) {
                const digit2 = num2.charCodeAt(j) - '0'.charCodeAt(0);
                const product = digit1 * digit2;
                const sum = product + res[i + j + 1];

                res[i + j + 1] = sum % 10;
                res[i + j] += Math.floor(sum / 10);
            }
        }

        // Convert to string, skipping leading zeros
        while (res[0] === 0) res.shift();

        return res.join('');
    }
}
