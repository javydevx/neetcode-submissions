class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        const countS = {}
        const countT = {}

        for (let char of s) {
            countS[char] = (countS[char] || 0) + 1  
        }

        for (let char of t) {
            countT[char] = (countT[char] || 0) + 1  
        }

        for (let char in countS) {
            if (countS[char] !== countT[char]) {
                return false
            }
        }

        return true
    }

    /*
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        const sortedS = s.split("").sort().join("")
        const sortedT = t.split("").sort().join("")
    
        return sortedS === sortedT
    }
    */
}
