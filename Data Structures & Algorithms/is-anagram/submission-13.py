class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        count = [0] * 26
        for i in range(len(s)):
            count[ord(s[i]) - ord('a')] += 1
            count[ord(t[i]) - ord('a')] -= 1
        
        for val in count:
            if val != 0:
                return False
        return True

        # countS, countT = {}, {}

        # for i in range(len(s)):
        #     countS[s[i]] = 1 + countS.get(s[i], 0)
        #     countT[t[i]] = 1 + countT.get(t[i], 0)
        
        # return countS == countT

        # if len(s) != len(t):
        #     return False
        
        # seenS = {}
        # for i in range(len(s)):
        #     seenS[s[i]] = 1 + seenS.get(s[i], 0)

        # for i in range(len(t)):
        #     if t[i] in seenS:
        #         seenS[t[i]] -= 1
        
        # return all(x == 0 for x in seenS.values())
