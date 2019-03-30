
You are given two numbers  `a`  and  `b`  where  `0 ≤ a ≤ b`. Imagine you construct an array of all the integers from  `a`  to  `b`  inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.

Example

For  `a = 2`  and  `b = 7`, the output should be  
`rangeBitCount(a, b) = 11`.

Given  `a = 2`  and  `b = 7`  the array is:  `[2, 3, 4, 5, 6, 7]`. Converting the numbers to binary, we get  `[10, 11, 100, 101, 110, 111]`, which contains  `1 + 2 + 1 + 2 + 2 + 3 = 11`1s.

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] integer a**
    
    _Guaranteed constraints:_  
    `0 ≤ a ≤ b`.
    
-   **[input] integer b**
    
    _Guaranteed constraints:_  
    `a ≤ b ≤ 10`.
    
-   **[output] integer**