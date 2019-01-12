
You are given a positive integer  `x`  and you should perform  `n`  operations, where on the  `ith`  operation you increase  `x`  in such a way that its new value is divisible by  `i`  (operations are numbered from  `1`  to  `n`).

Find the minimal value of  `x`  you can obtain by performing  `n`  operations described above.

Example

For  `x = 9`  and  `n = 5`, the output should be  
`increasingNumber(x, n) = 15`.

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] integer x**
    
    Starting positive integer.
    
    _Guaranteed constraints:_  
    `1 ≤ x ≤ 15`.
    
-   **[input] integer n**
    
    The number of operations.
    
    _Guaranteed constraints:_  
    `2 ≤ n ≤ 100`.
    
-   **[output] integer**
    
    -   The minimal possible value you can obtain after the described operations.