class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        cars = list(zip(position, speed))
        cars.sort(reverse=True) # sort by position descending

        fleets = 0
        max_time = 0

        for pos, spd in cars:
            time = (target - pos) / spd

            if time > max_time:
                fleets += 1
                max_time = time
        
        return fleets