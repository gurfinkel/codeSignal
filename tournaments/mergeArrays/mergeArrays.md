
Let's call an array  _sorted_  if its elements are arranged in a non-decreasing order. Given two  _sorted_  arrays, merge them.

**Example**

For  `a = [1, 2, 2, 4]`  and  `b = [2, 3, 4]`, the output should be  
`mergeArrays(a, b) = [1, 2, 2, 2, 3, 4, 4]`.

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] array.integer a**
    
    Sorted array of integers.
    
    _Guaranteed constraints:_  
    `1 ≤ a.length ≤ 5`,  
    `1 ≤ a[i] ≤ 15`.
    
-   **[input] array.integer b**
    
    Another sorted array of integers.
    
    _Guaranteed constraints:_  
    `0 ≤ b.length ≤ 5`,  
    `1 ≤ b[i] ≤ 15`.
    
-   **[output] array.integer**
    
    -   Sorted array obtained by merging  `a`  and  `b`.