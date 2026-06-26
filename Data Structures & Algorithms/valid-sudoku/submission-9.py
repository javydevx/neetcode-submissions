class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:

        rows = [set() for _ in range(9)]
        cols = [set() for _ in range(9)]
        boxes = {} # key: (box_row, box_col)

        for row in range(9):
            for col in range(9):
                num = board[row][col]

                if num == ".":
                    continue
                
                box_key = (row // 3, col // 3)

                if (num in rows[row] or
                    num in cols[col] or
                    num in boxes.get(box_key, set())):
                    return False
                
                rows[row].add(num)
                cols[col].add(num)

                if box_key not in boxes:
                    boxes[box_key] = set()
                boxes[box_key].add(num)
        
        return True