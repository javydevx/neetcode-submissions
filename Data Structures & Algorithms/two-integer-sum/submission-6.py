class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for i in range(len(nums)):
            current = target - nums[i]
            if current in seen:
                return [seen[current], i]
            seen[nums[i]] = i
        return [] 