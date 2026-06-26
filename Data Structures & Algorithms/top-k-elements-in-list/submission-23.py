class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # Step 1: count frequencies
        # numsMap = {}
        # for num in nums:
        #     numsMap[num] = 1 + numsMap.get(num, 0)
        numsMap = Counter(nums)

        # Step 2: use min heap
        heap = []
        for num, cnt in numsMap.items():
            heapq.heappush(heap, (cnt, num))

            # keep heap size = k
            if len(heap) > k:
                heapq.heappop(heap)
        
        # Step 3: extract numbers
        # res = []
        # for i in range(k):
        #     res.append(heapq.heappop(heap)[1])
        # return res
        return [num for cnt, num in heap]
        