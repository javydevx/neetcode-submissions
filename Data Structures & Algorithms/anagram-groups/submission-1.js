class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
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
}
