class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:

        rows = [set() for _ in range(9)]
        cols = [set() for _ in range(9)]
        boxes = {} # key: (box_row, box_col)

        for r in range(9):
            for c in range(9):
                num = board[r][c]

                if num == ".":
                    continue
                
                # Calculate box index
                box_key = (r // 3, c // 3)

                # Check if already seen
                if (num in rows[r] or
                    num in cols[c] or
                    num in boxes.get(box_key, set())):
                    return False

                # Add number
                rows[r].add(num)
                cols[c].add(num)

                if box_key not in boxes:
                    boxes[box_key] = set()
                boxes[box_key].add(num)
        
        return True




