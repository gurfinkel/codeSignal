
You are given a rectangular array representing the  `plan`  of an empty room, with one cell marked as the starting point. The boundary of the room is formed by the leftmost and rightmost columns, as well as the topmost and bottommost rows. You need to find all the shortest paths from a given starting point to the boundary, meaning that such paths must traverse the minimum number of cells. It is possible to move to the cell adjacent to your current position horizontally, vertically or diagonally.

Find all the shortest paths, mark them on the given  `plan`  with the  `'#'`  character, and return the resulting array as the answer.

Example

For

    plan = [
    [' ', ' ', ' ', ' ', ' ', ' '], 
    [' ', ' ', ' ', ' ', ' ', ' '], 
    [' ', ' ', ' ', ' ', ' ', ' '], 
    [' ', ' ', ' ', ' ', ' ', ' '], 
    [' ', ' ', 's', ' ', ' ', ' '], 
    [' ', ' ', ' ', ' ', ' ', ' '], 
    [' ', ' ', ' ', ' ', ' ', ' '], 
    [' ', ' ', ' ', ' ', ' ', ' ']] 

the output should be

    fillShortestPaths(plan) = [
    [' ', ' ', ' ', ' ', ' ', ' '], 
    [' ', ' ', ' ', ' ', ' ', ' '], 
    ['#', ' ', ' ', ' ', ' ', ' '], 
    ['#', '#', ' ', ' ', ' ', ' '], 
    ['#', '#', 's', ' ', ' ', ' '], 
    ['#', '#', ' ', ' ', ' ', ' '], 
    ['#', ' ', ' ', ' ', ' ', ' '], 
    [' ', ' ', ' ', ' ', ' ', ' ']] 

The shortest path to the boundary is two steps long. Actually, there are 9 such paths:

-   `(4, 2) -> (3, 1) -> (2, 0)`
-   `(4, 2) -> (3, 1) -> (3, 0)`
-   `(4, 2) -> (3, 1) -> (4, 0)`
-   `(4, 2) -> (4, 1) -> (3, 0)`
-   `(4, 2) -> (4, 1) -> (4, 0)`
-   `(4, 2) -> (4, 1) -> (5, 0)`
-   `(4, 2) -> (5, 1) -> (4, 0)`
-   `(4, 2) -> (5, 1) -> (5, 0)`
-   `(4, 2) -> (5, 1) -> (6, 0)`

Here, each cell is described as  `(0-based row index, 0-based column index)`.

![](https://codesignal.s3.amazonaws.com/tasks/fillShortestPaths/img/example.png?_tm=1551474577227)

Please, note that the starting point should remain marked with the letter  `'s'`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.array.char plan**
    
    A rectangular array of characters with only one element equal to  `'s'`  and all others equal to  `' '`.
    
    _Guaranteed constraints:_  
    `1 ≤ plan.length ≤ 100`,  
    `1 ≤ plan[i].length ≤ 100`,  
    `plan[i].length = plan[j].length`.
    
-   **[output] array.array.char**