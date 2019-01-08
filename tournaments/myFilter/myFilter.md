
Given an array of integers  `inputArray`  and an integer  `extraElement`, remove all the elements which are equal to  `extraElement`  from  `inputArray`.

Example

For  `inputArray = [1, 2, 3, 2, 1, 3, 1, 2]`  and  `extraElement = 3`, the output should be  
`myFilter(inputArray, extraElement) = [1, 2, 2, 1, 1, 2]`.

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] array.integer inputArray**
    
    _Guaranteed constraints:_  
    `5 ≤ inputArray.length ≤ 10`,  
    `1 ≤ inputArray[i] ≤ 100`.
    
-   **[input] integer extraElement**
    
    _Guaranteed constraints:_  
    `1 ≤ extraElement ≤ 100`.
    
-   **[output] array.integer**
    
    -   `inputArray`  without elements equal to  `extraElement`.