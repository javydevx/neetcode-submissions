class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let anagramGroups = {}

        for (let str of strs) {
            let sortedStr = str.split("").sort().join("")

            if (!anagramGroups[sortedStr]) {
                anagramGroups[sortedStr] = []
            }

            anagramGroups[sortedStr].push(str)
        }
        return Object.values(anagramGroups)
    }
}
