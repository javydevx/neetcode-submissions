class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = [set() for _ in range(9)]
        cols = [set() for _ in range(9)]
        boxes = [set() for _ in range(9)]

        for r in range(9):
            for c in range(9):
                val = board[r][c]
                if val == '.':
                    continue # skip empty cells
                
                # Find which box this cell belongs to 
                box_index = (r // 3) * 3 + (c // 3)

                # Check for duplicates
                if val in rows[r] or val in cols[c] or val in boxes[box_index]:
                    return False # invalid board

                # Otherwise, mark the value as seen
                rows[r].add(val)    
                cols[c].add(val)    
                boxes[box_index].add(val)

        return True # valid Sudoku 
