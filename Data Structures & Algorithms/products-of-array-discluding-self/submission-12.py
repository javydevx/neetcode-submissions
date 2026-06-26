class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        res = [1] * n

        # Step 1: Build prefix products into result
        prefix = 1
        for i in range(n):
            res[i] = prefix
            prefix *= nums[i]
        
        # Step 2: Multiply with suffix products
        suffix = 1
        for i in range(n - 1, -1, -1):
            res[i] *= suffix
            suffix *= nums[i]

        return res