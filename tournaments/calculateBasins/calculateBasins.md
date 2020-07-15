
A group of farmers has some elevation data that we are going to use to help them understand how rainfall flows over their farmland. We represent the farmland as a 2D array of altitudes, the  `grid`, and use the following model, based on the fact that water flows downhill:

-   If a cell's four neighboring cells all have altitudes not lower that its own, this cell is a  **sink**  in which water collects.
-   Otherwise, water will flow into the neighboring cell with the lowest altitude. If a cell is not a sink, you can assume it has a unique lowest neighbor and that this neighbor will be lower than the cell.
-   Cells that drain into the same sink, directly or indirectly, are part of the same  **basin**.

Given an  `n × n`  `grid`  of elevations, your goal is to partition the map into basins and output the sizes of the basins, in descending order.

Example

For

```
grid = [[1, 5, 2], 
        [2, 4, 7], 
        [3, 6, 9]]

```

the output should be  
`calculateBasins(grid) = [7, 2]`.

The two basins in this map, labeled as  `A`s and  `B`s, are:

```
  A A B 
  A A B 
  A A A 

```

The size of the basin labeled as  `A`s is 7 cells and the size of the basin labeled as  `B`s is 2 cells. The  `A`  basin drains into the sink with an altitude of  `1`  located at  `grid[0][0]`  and the  `B`  basin drains into the sink with an altitude of  `2`  located at  `grid[0][2]`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.array.integer grid**
    
    A 2D array representing a map in which each cell has an altitude.
    
    _Guaranteed constraints:_  
    `1 ≤ grid.length ≤ 200`,  
    `grid[i].length = grid.length`,  
    `0 ≤ grid[i][j] ≤ 10^4`.
    
-   **[output] array.integer**
    
    -   An array containing the size of each basin in the  `grid`.
