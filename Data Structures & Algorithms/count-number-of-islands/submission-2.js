class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let count = 0;

        const dfs = (row, col) => {
            if (
                row < 0 || col < 0 ||
                row >= ROWS || col >= COLS ||
                grid[row][col] !== '1'
            ) return;

            // VISIT node: sink this part of the island    
            grid[row][col] = '0'; // Mark as visited

            dfs(row + 1, col, grid); // up
            dfs(row - 1, col, grid); // down
            dfs(row, col + 1, grid); // right
            dfs(row, col - 1, grid); // left
        };

        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                if (grid[row][col] === '1') {
                    count++;
                    dfs(row, col);
                }
            }
        }

        return count;
    }
}
