"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""
class Solution:
    def minMeetingRooms(self, intervals: List[Interval]) -> int:
        if not intervals:
            return 0
    
        max_rooms = 0
        
        for i in range(len(intervals)):
            start_time = intervals[i].start
            rooms_needed = 0
            
            for j in range(len(intervals)):
                # Check if meeting j is happening when meeting i starts
                if intervals[j].start <= start_time < intervals[j].end:
                    rooms_needed += 1
                    
            max_rooms = max(max_rooms, rooms_needed)
            
        return max_rooms   