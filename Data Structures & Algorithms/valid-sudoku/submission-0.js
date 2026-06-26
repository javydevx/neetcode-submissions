class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
         // Initialize sets to track numbers for rows, columns, and sub-boxes
    let rows = new Array(9).fill().map(() => new Set());
    let cols = new Array(9).fill().map(() => new Set());
    let boxes = new Array(9).fill().map(() => new Set());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let value = board[r][c];

            // If the cell is empty, skip it
            if (value === '.') continue;

            // Calculate box index
            let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            // Check for duplicates in row, column, and box
            if (rows[r].has(value) || cols[c].has(value) || boxes[boxIndex].has(value)) {
                return false;
            }

            // Add the value to the corresponding sets
            rows[r].add(value);
            cols[c].add(value);
            boxes[boxIndex].add(value);
        }
    }

    // If no duplicates are found, the board is valid
    return true;
    }
}
