
Define partial sort of array as follows:  
first  `k`  elements of the result should be exactly the same as they will be in the sorted array and the rest elements should go in the same order as they occur in the original array.

Apply a partial sort to a given array.

Example

For  `input = [4, 3, 1, 2]`  and  `k = 2`, the output should be  
`partialSort(input, k) = [1, 2, 4, 3]`.

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] array.integer input**
    
    Unsorted array of distinct positive integers.
    
    _Guaranteed constraints:_  
    `3 ≤ input.length ≤ 10`,  
    `1 ≤ input[i] < 109`.
    
-   **[input] integer k**
    
    A non-negative integer.
    
    _Guaranteed constraints:_  
    `0 ≤ k ≤ 5`.
    
-   **[output] array.integer**
    
    -   Partially sorted  `input`  (for a given  `k`).