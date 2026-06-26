class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs) {
        let anagramMap = new Map();

        for (let str of strs) {
            let count = new Array(26).fill(0);

            for (let char of str) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            let key = count.join(',');

            if (!anagramMap.has(key)) {
                anagramMap.set(key, []);
            }

            anagramMap.get(key).push(str);
        }

        return Array.from(anagramMap.values());
    }

    /*
    groupAnagrams(strs) {
        let anagramGroups = {}

        for (let str of strs) {
            let sortedStr = str.split("").sort().join("") // act

            if (!anagramGroups[sortedStr]) {
                anagramGroups[sortedStr] = [] // { act: [] }
            }

            anagramGroups[sortedStr].push(str) // { act: ['cat'] }
        }
        return Object.values(anagramGroups)
    }
    */

    /*
    groupAnagrams(strs) {
        let anagramMap = new Map();

        for (let str of strs) {
            let sortedStr = str.split('').sort().join('');

            if (!anagramMap.has(sortedStr)) {
                anagramMap.set(sortedStr, []);
            }

            anagramMap.get(sortedStr).push(str);
        }

        let result = Array.from(anagramMap.values());
        return result;
    }
    */
}
