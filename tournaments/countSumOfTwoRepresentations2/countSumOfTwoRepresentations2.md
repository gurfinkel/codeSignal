
Given integers  `n`,  `l`  and  `r`, find the number of ways to represent  `n`  as a sum of two integers  `A`  and  `B`  such that  `l ≤ A ≤ B ≤ r`.

Example

For  `n = 6`,  `l = 2`, and  `r = 4`, the output should be  
`countSumOfTwoRepresentations2(n, l, r) = 2`.

There are just two ways to write  `6`  as  `A + B`, where  `2 ≤ A ≤ B ≤ 4`:  `6 = 2 + 4`  and  `6 = 3 + 3`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer n**
    
    A positive integer.
    
    _Guaranteed constraints:_  
    `5 ≤ n ≤ 109`.
    
-   **[input] integer l**
    
    A positive integer.
    
    _Guaranteed constraints:_  
    `1 ≤ l ≤ r`.
    
-   **[input] integer r**
    
    A positive integer.
    
    _Guaranteed constraints:_  
    `l ≤ r ≤ 109`,  
    `r - l ≤ 106`.
    
-   **[output] integer**