
Implement a function that can sum two  reduced fractions  and produce a new one.

**Example**

For  `a = [3, 5]`  and  `b = [7, 5]`, the output should be  
`fractionSum(a, b) = [2, 1]`.

`3 / 5 + 7 / 5 = 10 / 5 = 2 / 1`, so the answer is  `[2, 1]`.

Input/Output

-   **[execution time limit] 4 seconds (py3)**
    
-   **[input] array.integer a**
    
    Array  `a`  of length  `2`  representing a reduced fraction  `a[0] / a[1]`.
    
    _Guaranteed constraints:_  
    `1 ≤ a[i] ≤ 10`.
    
-   **[input] array.integer b**
    
    Array  `b`  of length  `2`  representing a reduced fraction  `b[0] / b[1]`.
    
    _Guaranteed constraints:_  
    `1 ≤ b[i] ≤ 10`.
    
-   **[output] array.integer**
    
    -   Sum of  `a`  and  `b`  as a reduced fraction.