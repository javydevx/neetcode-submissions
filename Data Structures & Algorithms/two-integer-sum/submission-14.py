class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        prevSeen = {}
        for i in range(len(nums)):
            diff = target - nums[i]
            if diff in prevSeen:
                return [prevSeen[diff], i]
            prevSeen[nums[i]] = i
        return []
                