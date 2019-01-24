
Given integers  `p`  and  `n`, find the smallest non-negative  `n`-digit integer (represented as a string) whose digits add up to  `p`. If there is no such number, return  `"-1"`  instead.

Example

-   For  `p = 15`  and  `n = 3`, the output should be  
    `reversedSumOfDigits(p, n) = "159"`;
    
-   For  `p = 30`  and  `n = 2`, the output should be  
    `reversedSumOfDigits(p, n) = "-1"`;
    
-   For  `p = 2`  and  `n = 5`, the output should be  
    `reversedSumOfDigits(p, n) = "10001"`.
    

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] integer p**
    
    _Guaranteed constraints:_  
    `0 ≤ p ≤ 105`.
    
-   **[input] integer n**
    
    _Guaranteed constraints:_  
    `1 ≤ n ≤ 104`.
    
-   **[output] string**