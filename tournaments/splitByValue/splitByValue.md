
For an integer  `k`  rearrange all the elements of the given array in such way, that:

-   all elements that are less than  `k`  are placed before elements that are not less than  `k`;
-   all elements that are less than  `k`  remain in the same order with respect to each other;
-   all elements that are not less than  `k`  remain in the same order with respect to each other.

Example

For  `k = 5`  and  `elements = [1, 3, 5, 7, 6, 4, 2]`, the output should be  
`splitByValue(k, elements) = [1, 3, 4, 2, 5, 7, 6]`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer k**
    
    _Guaranteed constraints:_  
    `0 ≤ k ≤ 10`.
    
-   **[input] array.integer elements**
    
    _Guaranteed constraints:_  
    `3 ≤ elements.length ≤ 10`,  
    `1 ≤ elements[i] ≤ 10`.
    
-   **[output] array.integer**