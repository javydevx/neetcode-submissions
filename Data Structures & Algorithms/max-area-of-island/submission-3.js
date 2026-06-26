class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let maxArea = 0;

        const directions = [
            [1, 0], //down
            [-1, 0], // up
            [0, 1], // right
            [0, -1] // left
        ];

        const bfs = (row, col) => {
            let area = 0;
            const queue = [[row, col]];
            grid[row][col] = 0; // mark visited

            while (queue.length > 0) {
                const [row, col] = queue.shift();
                area++;

                for (const [dr, dc] of directions) {
                    const newRow = row + dr;
                    const newCol = col + dc;

                    if (
                        newRow >= 0 && newCol >= 0 &&
                        newRow < ROWS && newCol < COLS &&
                        grid[newRow][newCol] === 1
                    ) {
                        queue.push([newRow, newCol]);
                        grid[newRow][newCol] = 0; // mark visited
                    }
                }
            }

            return area;
        }

        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                if (grid[row][col] === 1) {
                    maxArea = Math.max(maxArea,  bfs(row, col));
                }
            }
        }

        return maxArea;
    }
}
