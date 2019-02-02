
For a pair of two positive integers  `a`  and  `b`consider the following operation: if one of the integers is divisible by the other - replace this integer with the division result of the two.

This operation is applied sequentially until it stops working. Return the number of times the operation is applied. It is guaranteed that the answer is a finite number.

Example

For  `a = 432`  and  `b = 72`, the output should be  
`numberOfOperations(a, b) = 4`.

For  `(a, b) = (432, 72)`  there will be  `4`  such operations:  
`(432, 72) -> (6, 72) -> (6, 12) -> (6, 2) -> (3, 2)`.

Input/Output

-   **[execution time limit] 4 seconds (py3)**
    
-   **[input] integer a**
    
    _Guaranteed constraints:_  
    `2 ≤ a ≤ 108`.
    
-   **[input] integer b**
    
    _Guaranteed constraints:_  
    `2 ≤ b ≤ 108`.
    
-   **[output] integer**