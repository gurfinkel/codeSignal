
Given array of integers, for each position  `i`, search among the previous positions for the last (from the left) position that contains a smaller value. Store this value at position  `i`  in the answer. If no such value can be found, store  `-1`  instead.

**Example**

For  `items = [3, 5, 2, 4, 5]`, the output should be  
`arrayPreviousLess(items) = [-1, 3, -1, 2, 4]`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer items**
    
    Non-empty array of positive integers.
    
    _Guaranteed constraints:_  
    `3 ≤ items.length ≤ 15`,  
    `1 ≤ items[i] ≤ 200`.
    
-   **[output] array.integer**
    
    -   Array containing answer values computed as described above.