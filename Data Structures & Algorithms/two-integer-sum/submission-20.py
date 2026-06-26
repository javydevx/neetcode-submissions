class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numsMap = {} # val -> index

        for i, n in enumerate(nums):
            numsMap[n] = i
        
        for i, n in enumerate(nums):
            diff = target - n
            if diff in numsMap and numsMap[diff] != i:
                return [i, numsMap[diff]]
        
        return []
            