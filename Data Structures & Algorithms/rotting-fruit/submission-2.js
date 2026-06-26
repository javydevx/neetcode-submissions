class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const queue = [];
        let freshOranges = 0;

        const directions = [
            [1, 0], //down
            [-1, 0], // up
            [0, 1], // right
            [0, -1] // left
        ];

        // Step 1: Collect all rotten oranges & count fresh ones
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                if (grid[row][col] === 2) {
                    queue.push([row, col]);
                }
                if (grid[row][col] === 1) {
                    freshOranges++;
                }
            }
        }

        if (freshOranges === 0) return 0; // No fresh oranges to rot

        let minutes = 0;

        // Step 2: Multi-source BFS
        while (queue.length > 0 && freshOranges > 0) {
            const len = queue.length;

            for (let i = 0; i < len; i++) {
                const [row, col] = queue.shift();

                for (const [dr, dc] of directions) {
                    const newRow = row + dr;
                    const newCol = col + dc;

                    if (
                        newRow >= 0 && newCol >= 0 &&
                        newRow < ROWS && newCol < COLS &&
                        grid[newRow][newCol] === 1
                    ) {
                        grid[newRow][newCol] = 2; // Rot it
                        freshOranges--;
                        queue.push([newRow, newCol]);
                    }
                }
            }

            minutes++; // One full wave of spread = 1 minute
        }

        return freshOranges === 0 ? minutes : -1;
    }
}
