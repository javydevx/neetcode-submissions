class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const INF = 2147483647;
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const queue = [];

        const directions = [
            [1, 0], //down
            [-1, 0], // up
            [0, 1], // right
            [0, -1] // left
        ];

        // Step 1: Enqueue all treasure cells (multi-source BFS)
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                if (grid[row][col] === 0) {
                    queue.push([row, col]);
                }
            }
        }

        // Step 2: BFS from all treasures
        while (queue.length > 0) {
            const [row, col] = queue.shift();

            for (const [dr, dc] of directions) {
                const newRow = row + dr;
                const newCol = col + dc;

                if (
                    newRow >= 0 && newCol >= 0 &&
                    newRow < ROWS && newCol < COLS &&
                    grid[newRow][newCol] === INF
                ) {
                    grid[newRow][newCol] = grid[row][col] + 1; // Set distance
                    queue.push([newRow, newCol]); // Explore further
                }
            }
        }

    }
}
