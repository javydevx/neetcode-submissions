class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const rows = board.length;
        const cols = board[0].length;

        const dfs = (r, c, idx) => {
            // Base condition: If we've mathced all letters
            if (idx === word.length) return true;

            // Check boundaries and current cell match
            if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[idx]) {
                return false;
            }

            // Temporarily mark the cell as visited
            let temp = board[r][c];
            board[r][c] = '#';

            // Explore all 4 directions
            const found = dfs(r + 1, c, idx + 1) ||
                          dfs(r - 1, c, idx + 1) ||
                          dfs(r, c + 1, idx + 1) ||
                          dfs(r, c - 1, idx + 1);
            
            // Restore the cell value after exploration
            board[r][c] = temp;

            return found;
        }

        // Start DFS from each cell
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] === word[0] && dfs(r, c, 0)) {
                    return true;
                }
            }
        }

        return false;
    }
}
