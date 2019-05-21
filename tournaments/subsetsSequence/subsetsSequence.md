
Given array of arrays of integers  `sets`, check whether it is possible to reorder the given arrays in such way that for each  `i`,  `sets[i]`will be a subset of  `sets[i + 1]`.

Example

-   For  `sets = [[1, 3, 2], [2], [1, 2], [2, 1]]`, the output should be  
    `subsetsSequence(sets) = true`;
-   For  `sets = [[1, 3, 2], [1, 2], [2, 3], [2]]`, the output should be  
    `subsetsSequence(sets) = false`.

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] array.array.integer sets**
    
    Elements of each of the arrays are pairwise distinct.
    
    _Guaranteed constraints:_  
    `1 ≤ sets.length ≤ 10`,  
    `1 ≤ sets[i].length ≤ 5`,  
    `1 ≤ sets[i][j] ≤ 10`.
    
-   **[output] boolean**
    
    -   `true`  if the desired reordering is possible,  `false`  otherwise.