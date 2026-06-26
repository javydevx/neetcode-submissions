class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        strMap = {}
        for strg in strs:
            curr = ''.join(sorted(strg))
            if curr in strMap:
                strMap[curr].append(strg)
            else:
                strMap[curr] = [strg]
        
        res = []
        for val in strMap.values():
            res.append(val)
        return res
