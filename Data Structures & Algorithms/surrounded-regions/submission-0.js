class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        if (!board || board.length === 0) return;

        const ROWS = board.length;
        const COLS = board[0].length;
        const directions = [
            [1, 0], //down
            [-1, 0], // up
            [0, 1], // right
            [0, -1] // left
        ];
    
        const dfs = (row, col) => {
            if (
                row < 0 || col < 0 ||
                row >= ROWS || col >= COLS ||
                board[row][col] !== 'O'
            ) return;
    
            board[row][col] = 'S' // Mark as Safe
    
            for (const [dr, dc] of directions) {
                dfs(row + dr, col + dc);
            }
        };
    
        // Step 1: DFS from border 'O's
        for (let row = 0; row < ROWS; row++) {
            dfs(row, 0);       // Left border
            dfs(row, COLS - 1) // Right border
        }
    
        for (let col = 0; col < COLS; col++) {
            dfs(0, col);        // Top border
            dfs(ROWS - 1, col); // Bottom border
        }
    
        // Step 2: Flip everything else
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] === 'O') {
                    board[r][c] = 'X'; // Captured
                } else if (board[r][c] === 'S') {
                    board[r][c] = 'O'; // Restore
                }
            }
        }
    }
}
