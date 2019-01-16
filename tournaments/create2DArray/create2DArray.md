
Given array of integers  `lengths`, create an array of arrays  `output`  such that  `output[i]`  consists of  `lengths[i]`  elements and  `output[i][j] = j`.

**Example**

For  `lengths = [1, 2, 0, 4]`, the output should be

    create2DArray(lengths) = [[0], [0, 1], [], [0, 1, 2, 3]] 

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer lengths**
    
    _Guaranteed constraints:_  
    `0 ≤ lengths.length ≤ 10`,  
    `0 ≤ lengths[i] ≤ 10`.
    
-   **[output] array.array.integer**