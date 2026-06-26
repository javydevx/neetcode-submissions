class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        mapCnt = {}
        for i in range(len(nums)):
            mapCnt[nums[i]] = mapCnt.get(nums[i], 0) + 1
        return any(v > 1 for v in mapCnt.values())
