class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        nums_map = {}
        for i, num in enumerate(nums):
            num_to_find = target - num
            if num_to_find in nums_map:
                return [nums_map[num_to_find], i]
            nums_map[num] = i