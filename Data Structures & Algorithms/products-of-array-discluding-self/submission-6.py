class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)        
        prefix = [1] * n
        suffix = [1] * n
        res = [1] * n
    
        # prefix[i] = product of all elements before i
        for i in range(1, n):
            prefix[i] = prefix[i - 1] * nums[i - 1]
        
        # suffix[i] = product of all elements after i
        for i in range(n - 2, -1, -1):
            suffix[i] = suffix[i + 1] * nums[i + 1]

        # result[i] = prefix[i] * suffix[i]
        for i in range(n):
            res[i] = prefix[i] * suffix[i]
        
        return res