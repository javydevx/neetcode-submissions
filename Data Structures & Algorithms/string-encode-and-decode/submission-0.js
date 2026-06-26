class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // Choose a delimiter that is unlikely to appear in the strings
        const delimiter = '#';
        return strs.map(str => str.length + delimiter + str).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const delimiter = '#';
        const result = [];
        let i = 0;
        
        while (i < str.length) {
            // Find the position of the delimiter
            let j = i;
            while (str[j] !== delimiter) {
                j++;
            }
            // Extract the length of the string
            const length = parseInt(str.substring(i, j));
            // Extract the actual string using the length
            const word = str.substring(j + 1, j + 1 + length);
            result.push(word);
            // Move to the next encoded string
            i = j + 1 + length;
        }
        
        return result;
    }
}
