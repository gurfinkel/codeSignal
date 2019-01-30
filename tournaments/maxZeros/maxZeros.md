
Given a decimal integer  `n`, find an integer  `k ≥ 2`such that the representation of  `n`  in base  `k`  has the maximum possible number of zeros. If there are several answers, output the smallest one.

Example

For  `n = 9`, the output should be  
`maxZeros(n) = 2`.  
`9 = 10012  = 1003  = 214...`  
If you'll try all other bases, you'll see that the maximum possible number of zeros in these representations is  `2`, thus the answer is  `k = 2`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] integer n**
    
    _Guaranteed constraints:_  
    `3 ≤ n ≤ 400`.
    
-   **[output] integer**
    
    -   The desired numeral system base.