class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    /*
    // Sorting
    groupAnagrams(strs) {
        const res = {};
        for (let s of strs) {
            let sortedS = s.split("").sort().join("");
            if (!res[sortedS]) {
                res[sortedS] = [];
            }
            res[sortedS].push(s);
        }
        return Object.values(res);
    }
    */

    // Hash Table
    groupAnagrams(strs) {
        const res = {};
        for (let s of strs) {
            const count = new Array(26).fill(0);
            for (let c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = count.join(".");
            if (!res[key]) {
                res[key] = [];
            }
            res[key].push(s);
        }
        return Object.values(res);
    }
}
