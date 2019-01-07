
Given integers  `n`,  `l`  and  `r`, find the number of ways to represent  `n`  as a sum of two integers  `A`and  `B`  such that  `l ≤ A ≤ B ≤ r`.

Example

For  `n = 6`,  `l = 2`, and  `r = 4`, the output should be  
`countSumOfTwoRepresentations3(n, l, r) = 2`.  
These ways are:  `2 + 4 = 6`  and  `3 + 3 = 6`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] integer n**
    
    A positive integer.
    
    _Guaranteed constraints:_  
    `5 ≤ n ≤ 106`.
    
-   **[input] integer l**
    
    A positive integer.
    
    _Guaranteed constraints:_  
    `1 ≤ l ≤ r`.
    
-   **[input] integer r**
    
    A positive integer.
    
    _Guaranteed constraints:_  
    `l ≤ r ≤ 109`.
    
-   **[output] integer**