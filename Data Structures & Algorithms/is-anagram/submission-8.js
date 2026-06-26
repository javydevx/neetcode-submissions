class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // Hash Table
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const count = {};

        for (let i = 0; i < s.length; i++) {
            count[s[i]] = (count[s[i]] || 0) + 1;
            count[t[i]] = (count[t[i]] || 0) - 1;
        }

        for (let char in count) {
            if (count[char] !== 0) return false;
        }

        return true;
    }

    /*
    // Sorting
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let sSort = s.split("").sort().join();
        let tSort = t.split("").sort().join();

        return sSort === tSort;
    }
    */

    /*
    // Hash Table (Optimal)
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let count = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }
        return count.every(val => val === 0);
    }
    */
}
