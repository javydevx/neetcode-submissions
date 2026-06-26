class Solution:
    def maxArea(self, heights: List[int]) -> int:
        n = len(heights)
        max_area = 0

        for i in range(n):
            for j in range(i + 1, n):
                width = j - i
                height = min(heights[i], heights[j])
                area = width * height
                max_area = max(max_area, area)
        
        return max_area