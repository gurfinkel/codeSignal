
Given three integers  `k`,  `l`  and  `r`  return the number of integers between  `l`  and  `r`  inclusive that have exactly  `k`  divisors.

It is guaranteed that  `l ≤ r`.

Example

For  `k = 3`,  `l = 2`, and  `r = 49`, the output should be  
`divNumber(k, l, r) = 4`.

We have  `4`  integers in that range that have exactly  `3`  divisors -  `4, 9, 25, 49`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer k**
    
    A positive integer.
    
    _Guaranteed constraints:_  
    `2 ≤ k ≤ 5`.
    
-   **[input] integer l**
    
    A positive integer.
    
    _Guaranteed constraints:_  
    `1 ≤ l ≤ r`.
    
-   **[input] integer r**
    
    A positive integer.
    
    _Guaranteed constraints:_  
    `l ≤ r ≤ 100`.
    
-   **[output] integer**