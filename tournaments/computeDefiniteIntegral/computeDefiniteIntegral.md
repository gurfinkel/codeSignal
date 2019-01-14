
Given integers  `l`  and  `r`, and a polynomial  `f(x) = P[0] + P[1] * x + P[2] * x2  + ...`, find the value of definite integral of  `f(x)`  over the interval  `[l, r]`.

Example

For  `l = -1`,  `r = 2`, and  `p = [0, 0, 0, 1]`, the output should be  
`computeDefiniteIntegral(l, r, p) = 3.75`.  
`f(x) = x3`, so its indefinite integral is  `x4/4`. Thus, the answer is  `24/4 - (-1)4/4 = 3.75`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer l**
    
    _Guaranteed constraints:_  
    `-150 ≤ l ≤ r`.
    
-   **[input] integer r**
    
    _Guaranteed constraints:_  
    `l ≤ r ≤ 150`.
    
-   **[input] array.integer p**
    
    Polynomial coefficients.
    
    _Guaranteed constraints:_  
    `1 ≤ p.length ≤ 8`,  
    `0 ≤ p[i] ≤ 100`.
    
-   **[output] float**
    
    -   Your answer will be considered correct if its absolute error doesn't exceed  `10-5`.