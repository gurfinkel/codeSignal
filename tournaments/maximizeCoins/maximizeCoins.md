
You have a 2D array  `coins`  with the following format:  `[x, y]`, where  `x`  and  `y`  are the coordinates of a coin. Using these coordinates, you're going to start collecting coins!

Assume that you start collecting coins at position  `(0, 0)`. You can only step from coordinate  `(a, b)`  to coordinate  `(a + dx, b + dy)`, where  `dx ≥ 0`  and  `dy ≥ 0`. Calculate the maximum number of coins that you can collect.

If there is more than one coin at the same coordinates, you can take them all.

Example

For  `coins = [[0, 1], [1, 1], [2, 0], [1, 2], [2, 2]]`,  
the output should be  `maximizeCoins(coins) = 4`.

You can collect coins from positions  `(0, 1)`,  `(1, 1)`,  `(1, 2)`  and  `(2, 2)`, for a total of  `4`  coins.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.array.integer coins**
    
    A two-dimensional array representing coordinates of coins.
    
    _Guaranteed constraints:_  
    `1 ≤ coins.length ≤ 10^5`,  
    `coins[i].length = 2`,  
    `0 ≤ coins[i][j] ≤ 1000`.
    
-   **[output] integer**
    
    -   The maximum possible number of coins you can collect.