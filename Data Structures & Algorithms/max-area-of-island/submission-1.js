class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let maxArea = 0;

        const dfs = (row, col) => {
            if (
                row < 0 || col < 0 ||
                row >= ROWS || col >= COLS ||
                grid[row][col] !== 1
            ) return 0;
            
            grid[row][col] = 0; // Mark as visited
            let area = 1;

            area += dfs(row + 1, col); // up
            area += dfs(row - 1, col); // down
            area += dfs(row, col + 1); // right
            area += dfs(row, col - 1); // left

            return area;
        }

        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                if (grid[row][col] === 1) {
                    let area = dfs(row, col);
                    maxArea = Math.max(area, maxArea); 
                }
            }
        }

        return maxArea;
    }
}
