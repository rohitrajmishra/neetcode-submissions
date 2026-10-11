class Solution {
    bfs(i, j, ROWS, COLS, visited, grid) {
        const q = [];
        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

        q.push([i, j]);
        visited.add([i, j].toString());

        while(q.length > 0) {
            let x, y;
            let dr, dc;

            [x, y] = q.shift();
            // For dfs only change required is below
            // [x, y] = q.pop();
            for([dr, dc] of directions) {
                const new_x = x + dr, new_y = y + dc;
                if(Math.min(new_x, new_y) < 0) {
                    // Out of bounds
                    continue;
                }
                if((new_x < ROWS && new_y < COLS)
                    && grid[new_x][new_y] === '1'
                    && !visited.has([new_x, new_y].toString())) {
                    // Add to q for further processing and mark visited
                    q.push([new_x, new_y]);
                    visited.add([new_x, new_y].toString());
                }
            }
        }
        return;
    }
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        // Empty/null/undefined grid
        if(!grid) {
            return 0;
        }

        const ROWS = grid.length;
        const COLS = grid[0].length;
        const visited = new Set();
        let islands = 0;

        for(let i=0;i<ROWS; i++) {
            for(let j=0;j<COLS; j++) {
                if((grid[i][j] === '1') && !visited.has([i, j].toString())) {
                    this.bfs(i, j, ROWS, COLS, visited, grid);
                    islands++;
                }
            }
        }
        return islands++;
    }
}
