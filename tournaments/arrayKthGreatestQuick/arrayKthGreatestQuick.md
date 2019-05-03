
Given an array of distinct integers, find its  `kth`greatest element.

Example

For  `inputArray = [19, 32, 11, 23]`  and  `k = 3`, the output should be  
`arrayKthGreatestQuick(inputArray, k) = 19`.

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] array.integer inputArray**
    
    An array of distinct integers.
    
    _Guaranteed constraints:_  
    `1 ≤ inputArray.length ≤ 5 · 104`,  
    `-105  ≤ inputArray[i] ≤ 105`.
    
-   **[input] integer k**
    
    A positive integer not exceeding  `inputArray`  length.
    
    _Guaranteed constraints:_  
    `1 ≤ k ≤ inputArray.length`.
    
-   **[output] integer**
    
    -   `kth`  greatest element of  `inputArray`.