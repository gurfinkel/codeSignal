function calculateBasins(grid) {
    const basins = grid.map(row => row.map(x => -1));
    const sizes = {};
    
    for (let i = 0; grid.length > i; ++i) {
        for (let j = 0; grid[0].length > j; ++j) {
            const sink = search(i, j);
            if (!sizes[sink]) sizes[sink] = 0;
            ++sizes[sink]
        }
    }
    
    function search(x, y) {
        if (-1 !== basins[x][y]) return basins[x][y];
        
        let sink = true;
        let [minX, minY] = [-1, -1];
        
        for (const [dx, dy] of [[-1, 0], [0, -1], [1, 0], [0, 1]]) {
            if (x + dx in grid && y + dy in grid[0] && grid[x + dx][y + dy] < grid[x][y]) {
                sink = false;
                if (-1 === minX || grid[x + dx][y + dy] < grid[minX][minY]) {
                    [minX, minY] = [x + dx, y + dy];
                }
            }
        }
        
        const result = sink ? 200 * x + y : search(minX, minY);
        basins[x][y] = result;
        
        return result;
    }
    
    return Object.values(sizes).sort((a, b) => b - a);
}
