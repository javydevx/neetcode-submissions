class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if (!grid || grid.length === 0) return 0;

        const ROWS = grid.length;
        const COLS = grid[0].length;
        let count = 0;

        const directions = [
            [1, 0], //down
            [-1, 0], // up
            [0, 1], // right
            [0, -1] // left
        ];

        const bfs = (row, col) => {
            const queue = [[row, col]];
            grid[row][col] = '0'; // Mark visited

            while (queue.length > 0) {
                const [row, col] = queue.shift();

                for (const [dr, dc] of directions) {
                    const newRow = row + dr;
                    const newCol = col + dc;

                    if (
                        newRow >= 0 && newCol >= 0 &&
                        newRow < ROWS && newCol < COLS &&
                        grid[newRow][newCol] === '1'
                    ) {
                        grid[newRow][newCol] = '0'; // Mark visited
                        queue.push([newRow, newCol]);
                    }
                }
             }
        }

        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                if (grid[row][col] === '1') {
                    bfs(row, col); // Traverse the entire island
                    count++; // Count this island
                }
            }
        }

        return count;
    }
}
