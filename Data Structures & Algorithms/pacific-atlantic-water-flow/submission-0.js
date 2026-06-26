class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWS = heights.length;
        const COLS = heights[0].length;

        const pacific = new Set();
        const atlantic = new Set();

        const directions = [
            [1, 0], //down
            [-1, 0], // up
            [0, 1], // right
            [0, -1] // left
        ];

        const dfs = (row, col, visited, prevHeight) => {
            // Boundary and flow condition
            if (
                row < 0 || col < 0 ||
                row >= ROWS || col >= COLS ||
                visited.has(`${row},${col}`) || heights[row][col] < prevHeight 
            ) return;

            visited.add(`${row},${col}`);

            for (const [dr, dc] of directions) {
                dfs(row + dr, col + dc, visited, heights[row][col]);
            }
        }

        // DFS from Pacific (top and left edges)
        for (let col = 0; col < COLS; col++) dfs(0, col, pacific, heights[0][col]);
        for (let row = 0; row < ROWS; row++) dfs(row, 0, pacific, heights[row][0]);

        // DFS from Atlantic (bottom and right edges)
        for (let col = 0; col < COLS; col++) dfs(ROWS - 1, col, atlantic, heights[ROWS - 1][col]);
        for (let row = 0; row < ROWS; row++) dfs(row, COLS - 1, atlantic, heights[row][COLS - 1]);

        const result = [];

        // Find intersection of both oceans
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                const key = `${row},${col}`;
                if (pacific.has(key) && atlantic.has(key)) {
                    result.push([row, col]);
                }
            }
        }

        return result;
    }
}
