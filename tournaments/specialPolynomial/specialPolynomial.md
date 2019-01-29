
Given integers  `x`  and  `n`, find the largest integer  `k`such that  `x0+x1+x2+...+xk  ≤ n`.

Example

For  `x = 2`  and  `n = 5`, the output should be  
`specialPolynomial(x, n) = 1`.

We have  `20  + 21  < 5`  and  `20  + 21  + 22  > 5`.

Input/Output

-   **[execution time limit] 4 seconds (py3)**
    
-   **[input] integer x**
    
    _Guaranteed constraints:_  
    `1 ≤ x ≤ 10`.
    
-   **[input] integer n**
    
    _Guaranteed constraints:_  
    `5 ≤ n < 109`.
    
-   **[output] integer**