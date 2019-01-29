
Given integers  `n`  and  `k`, find the number of the ways to choose  `k`  objects out of  `n`  different ones modulo  `109  + 7`.  _Note_  that the order doesn't matter.

Example

For  `n = 5`  and  `k = 2`, the output should be  
`countWays(n, k) = 10`.  
Here are all possible ways to choose  `2`  objects out of  `5`  if we number them from  `1`  to  `5`:

    [1, 2], [1, 3], [1, 4], [1, 5], 
    [2, 3], [2, 4], [2, 5], 
    [3, 4], [3, 5], 
    [4, 5] 

Input/Output

-   **[execution time limit] 4 seconds (py3)**
    
-   **[input] integer n**
    
    A non-negative integer.
    
    _Guaranteed constraints:_  
    `5 ≤ n ≤ 105`.
    
-   **[input] integer k**
    
    A non-negative integer.
    
    _Guaranteed constraints:_  
    `2 ≤ k ≤ 105`,  
    `n · k ≤ 106`.
    
-   **[output] integer**
    
    -   Number of the ways to choose  `k`  objects out of  `n`  different objects modulo  `109  + 7`.