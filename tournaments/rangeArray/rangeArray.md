
Given integers  `l`,  `r`  (`l ≤ r`), and  `step`, consider the following sequence:  `l, l + step, l + 2 * step, ...`. Return an array containing all elements of that sequence that are less than  `r`. Note that they should be stored in the same order as they occur in the sequence.

Example

For  `l = 1`,  `r = 10`, and  `step = 3`, the output should be  
`rangeArray(l, r, step) = [1, 4, 7]`.

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] integer l**
    
    _Guaranteed constraints:_  
    `-15 ≤ l ≤ r`.
    
-   **[input] integer r**
    
    _Guaranteed constraints:_  
    `l ≤ r ≤ 15`.
    
-   **[input] integer step**
    
    _Guaranteed constraints:_  
    `1 ≤ step ≤ 6`.
    
-   **[output] array.integer**