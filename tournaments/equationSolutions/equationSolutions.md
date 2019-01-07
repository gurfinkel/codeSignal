
Given integers  `l`  and  `r`, find the number of different pairs of integers  `A`  and  `B`  such that  `l <= A <= r`  and  `l <= B <= r`  and  `A3  = B2`.

Note that  `A`  and  `B`  may even coincide (`A = B = 1`is one of the possibilities).

Example

-   For  `l = 1`  and  `r = 4`, the output should be  
    `equationSolutions(l, r) = 1`.
    
    There is only one solution:  `(1, 1)`.
    
-   For  `l = 1`  and  `r = 8`, the output should be  
    `equationSolutions(l, r) = 2`.
    
    There are two solutions:  `(1, 1)`  and  `(4, 8)`.
    

Input/Output

-   **[execution time limit] 3 seconds (java)**
    
-   **[input] integer l**
    
    _Guaranteed constraints:_  
    `-100 ≤ l ≤ 1`.
    
-   **[input] integer r**
    
    _Guaranteed constraints:_  
    `l < r ≤ 100`.
    
-   **[output] integer**