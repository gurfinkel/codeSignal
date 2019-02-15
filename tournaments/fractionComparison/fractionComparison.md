
Compare the two given fractions.

**Example**

-   For  `a = [3, 4]`  and  `b = [6, 8]`, the output should be  
    `fractionComparison(a, b) = '='`;
-   For  `a = [3, 2]`  and  `b = [2, 5]`, the output should be  
    `fractionComparison(a, b) = '>'`;
-   For  `a = [3, 5]`  and  `b = [2, 3]`, the output should be  
    `fractionComparison(a, b) = '<'`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer a**
    
    Array  `a`  of length 2 representing fraction  `a[0] / a[1]`,  `a[0]`.
    
    _Guaranteed constraints:_  
    `1 ≤ a[i] ≤ 10`.
    
-   **[input] array.integer b**
    
    Array  `b`  of length 2 representing fraction  `b[0] / b[1]`,  `b[0]`.
    
    _Guaranteed constraints:_  
    `1 ≤ b[i] ≤ 10`.
    
-   **[output] char**
    
    -   The result of the comparison between  `a`and  `b`  (i.e.  `'>', '<'`  or  `'='`).