class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        mapCnt = {}
        for i in range(len(nums)):
            mapCnt[nums[i]] = 1 + mapCnt.get(nums[i], 0)
        for k, v in mapCnt.items():
            if v > 1:
                return True
        return False
