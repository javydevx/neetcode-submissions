class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        numsMap = {}
        for num in nums:
            numsMap[num] = numsMap.get(num, 0) + 1
        
        arr = []
        for num, cnt in numsMap.items():
            arr.append([cnt, num])
        arr.sort()
        
        res = []
        while len(res) < k:
            res.append(arr.pop()[1])
        
        return res