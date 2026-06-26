class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        numsMap = {}
        for num in nums:
            numsMap[num] = 1 + numsMap.get(num, 0)
        
        heap = []
        for num in numsMap.keys():
            heapq.heappush(heap, (numsMap[num], num))
            if len(heap) > k:
                heapq.heappop(heap)
        
        res = []
        for i in range(k):
            res.append(heapq.heappop(heap)[1])
        return res
        