class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        countArr = [0] * 26
        for i in range(len(s)):
            countArr[ord(s[i]) - ord('a')] += 1
            countArr[ord(t[i]) - ord('a')] -= 1

        return all(x == 0 for x in countArr)

        # if len(s) != len(t):
        #     return False
        
        # count = [0] * 26
        # for i in range(len(s)):
        #     count[ord(s[i]) - ord('a')] += 1
        #     count[ord(t[i]) - ord('a')] -= 1
        
        # for val in count:
        #     if val != 0:
        #         return False
        # return True

        # ================================

        # countS, countT = {}, {}

        # for i in range(len(s)):
        #     countS[s[i]] = 1 + countS.get(s[i], 0)
        #     countT[t[i]] = 1 + countT.get(t[i], 0)
        
        # return countS == countT

        # ================================

        # seen = {}
        # for i in range(len(s)):
        #     seen[s[i]] = 1 + seen.get(s[i], 0)

        # for i in range(len(t)):
        #     if t[i] in seen:
        #         seen[t[i]] -= 1
        # for x in seen.values():
        #   if x != 0:
        #       return False
        #   return True
        # return all(x == 0 for x in seen.values())
