
You are given an array of integers. Sort its sub-array between the given indices  `l`  and  `r`  (inclusive) and leave the other elements intact.

Example

For  `a = [5, 2, 1, 7, 5, 3, 2, 3]`,  `l = 0`, and  `r = 3`, the output should be  
`quickSort(a, l, r) = [1, 2, 5, 7, 5, 3, 2, 3]`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer a**
    
    _Guaranteed constraints:_  
    `5 ≤ a.length ≤ 100`,  
    `1 ≤ a[i] ≤ 100`.
    
-   **[input] integer l**
    
    The left bound of the array segment to sort.
    
    _Guaranteed constraints:_  
    `0 ≤ l ≤ r`.
    
-   **[input] integer r**
    
    The right bound of the array segment to sort.
    
    _Guaranteed constraints:_  
    `l ≤ r < a.length`.
    
-   **[output] array.integer**