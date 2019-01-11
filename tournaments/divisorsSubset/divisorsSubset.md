
Given an array of integers  `subset`  and an integer  `n`, find the number of integers between  `1`  and  `n`, inclusive, whose set of divisors contains  `subset`  as a subset.

Example

For  `subset = [2, 3]`  and  `n = 13`, the output should be  
`divisorsSubset(subset, n) = 2`.  
These integers are  `6`  and  `12`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer subset**
    
    An array of positive integers.
    
    _Guaranteed constraints:_  
    `1 ≤ subset.length ≤ 5`,  
    `1 ≤ subset[i] ≤ 15`.
    
-   **[input] integer n**
    
    A positive integer.
    
    _Guaranteed constraints:_  
    `10 ≤ n ≤ 150`.
    
-   **[output] integer**