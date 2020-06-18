
Each cell in a 2D grid contains either a wall (`'W'`) or an enemy (`'E'`), or is empty (`'0'`). Bombs can destroy enemies, but walls are too strong to be destroyed. A bomb placed in an empty cell destroys all enemies in the same row and column, but the destruction stops once it hits a wall.

Return the maximum number of enemies you can destroy using one bomb.

_Note that your solution should have  `O(field.length · field[0].length)`  complexity because this is what you will be asked during an interview_.

Example

For

```
field = [["0", "0", "E", "0"],
         ["W", "0", "W", "E"],
         ["0", "E", "0", "W"],
         ["0", "W", "0", "E"]]

```

the output should be  
`bomber(field) = 2`.

Placing a bomb at  `(0, 1)`  or at  `(0, 3)`  destroys  `2`  enemies.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.array.char field**
    
    A rectangular matrix containing characters  `'0'`,  `'W'`  and  `'E'`.
    
    _Guaranteed constraints:_  
    `0 ≤ field.length ≤ 100`,  
    `0 ≤ field[i].length ≤ 100`.
    
-   **[output] integer**