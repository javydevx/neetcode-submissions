class Solution:

    def encode(self, strs: List[str]) -> str:
        encoded = ""
        for s in strs:
            encoded += str(len(s)) + "#" + s
        return encoded

    def decode(self, s: str) -> List[str]:
        res = []
        i = 0

        while i < len(s):
            # find the separator
            j = i
            while s[j] != "#":
                j += 1
            
            length = int(s[i:j])
            i = j + 1 # move past '#'

            res.append(s[i:i+length])
            i += length # move to next encoded string
        
        return res