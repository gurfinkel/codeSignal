
Given an array of integers  `inputArray`  and an integer  `bound`, find the smallest array element strictly greater than  `bound`.

Example

For  `inputArray = [1, 3, 5, 4, 2, 6]`  and  `bound = 3`, the output should be  
`arrayMinimumAboveBound(inputArray, bound) = 4`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer inputArray**
    
    Non-empty array of integers.
    
    _Guaranteed constraints:_  
    `2 ≤ inputArray.length ≤ 10`,  
    `-50 ≤ inputArray[i] ≤ 50`.
    
-   **[input] integer bound**
    
    An integer selected in such a way that guarantees the existence of the output.
    
    _Guaranteed constraints:_  
    `-25 ≤ bound ≤ 25`.
    
-   **[output] integer**