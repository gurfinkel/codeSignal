
Given positive integer numbers  `a, b`  and  `n`  return the maximum number that can be obtained by lengthening number  `a`  repeatedly no more than  `n`times.

Lengthening number  `a`  means appending exactly one digit (in the decimal notation) to the right hand side of  `a`  such that the resulting number is divisible by number  `b`. If it is impossible to obtain a number that is divisible by  `b`, then the lengthening operation cannot be performed.

Example

For  `a = 12`,  `b = 11`, and  `n = 2`, the output should be  
`addDigits(a, b, n) = "1210"`.

Lengthening operations can be  `12->121->1210`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] integer a**
    
    First number, a positive integer.
    
    _Guaranteed constraints:_  
    `3 ≤ a ≤ 420`.
    
-   **[input] integer b**
    
    Divisor, a positive integer.
    
    _Guaranteed constraints:_  
    `3 ≤ b ≤ 15`.
    
-   **[input] integer n**
    
    Maximum number of operations, a positive integer.
    
    _Guaranteed constraints:_  
    `1 ≤ n ≤ 10`.
    
-   **[output] string**
    
    -   Maximum obtainable number. The output can be rather large so it needs to be returned as a string.