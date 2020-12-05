function digitJumping(grid, start, finish) {
    const visited = [];
    const directions = [[0, 1],[0, -1],[-1, 0],[1, 0]];
    const coords = {};
    const queue = [start];
    
    for (const row of grid) {
        const temp = [];
        for (const cell of row)
            temp.push(0);
        visited.push(temp);
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const d = grid[i][j];
            if (coords[d])
                coords[d].push([i, j]);
            else
                coords[d] = [[i, j]];
        }
    }
    
    for (const [x, y] of queue) {
        visited[x][y] = visited[x][y] || 1;
        // Reached the end?
        if (x === finish[0] && y === finish[1]) {
            return visited[x][y] - 1;
        }
        
        // Check cells with same digit
        const cd = coords[grid[x][y]];
        for (const [i, j] of cd) {
            if (!visited[i][j]) {
                visited[i][j] = -~visited[x][y];
                queue.push([i, j]);
            }
        }
        
        // All those cells are already visited,
        // So no need to check them again.
        coords[grid[x][y]] = [];
        
        // Check adjacent cells
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < grid.length && ny >= 0 && ny < grid[0].length && !visited[nx][ny]) {
                visited[nx][ny] = -~visited[x][y];
                queue.push([nx, ny]);
            }
        }
    }
}
