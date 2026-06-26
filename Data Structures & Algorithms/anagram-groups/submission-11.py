class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        strsMap = {}
        for s in strs:
            key = ''.join(sorted(s))
            if key not in strsMap:
                strsMap[key] = []
            strsMap[key].append(s)
        return list(strsMap.values())
        '''
            we iterate over each word in arr
            sort each number and that will be key in hashmap
            and we can sort each number and see if it matches we add it
            and we return map values
        ''' 