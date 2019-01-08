
Implement a function that can subtract two  reduced fractions  and produce a new one.

**Example**

For  `a = [7, 10]`  and  `b = [3, 10]`, the output should be  
`fractionSubtraction(a, b) = [2, 5]`.

`7/10 - 3/10 = 4/10 = 2/5`, so the answer is  `[2, 5]`.

Input/Output

-   **[execution time limit] 4 seconds (py3)**
    
-   **[input] array.integer a**
    
    Array  `a`  of length  `2`  representing a reduced fraction  `a[0] / a[1]`.
    
    _Guaranteed constraints:_  
    `1 ≤ a[i] ≤ 10`.
    
-   **[input] array.integer b**
    
    Array  `b`  of length  `2`  representing a reduced fraction  `b[0] / b[1]`,  `a > b`.
    
    _Guaranteed constraints:_  
    `1 ≤ b[i] ≤ 10`.
    
-   **[output] array.integer**
    
    -   Difference of  `a`  and  `b`  as a reduced fraction.