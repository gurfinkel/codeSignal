
Determine if it is possible to sort an array by reversing one of its  contiguous subarrays.

It's guaranteed that array is not initially sorted.

Example

-   For  `inputArray = [-1, 5, 4, 3, 2, 8]`, the output should be  
    `reverseToSort(inputArray) = true`.
    
    We can reverse  `[5, 4, 3, 2]`  to make it sorted.
    
-   For  `inputArray = [1, 3, 2, 5, 4, 6]`, the output should be  
    `reverseToSort(inputArray) = false`.
    

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] array.integer inputArray**
    
    _Guaranteed constraints:_  
    `3 ≤ inputArray.length ≤ 10`,  
    `-100 ≤ inputArray[i] ≤ 100`.
    
-   **[output] boolean**
    
    -   `true`  if it is possible to sort an array (in strictly increasing order) by reversing one of its  _contiguous subarrays_,  `false`  otherwise.