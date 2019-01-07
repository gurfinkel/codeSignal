
Given an array of integers  `inputArray`, find the  contiguous subarray  which has the maximum sum. Return that sum.

Example

-   For  `inputArray = [-1, 7, -2, 3, 4, 0, 1, -1]`, the output should be  
    `maxSubarray(inputArray) = 13`.  
    It is the sum of the  _subarray_  `[7, -2, 3, 4, 0, 1]`and no other  _contiguous subarray_  has a larger sum.
    
-   For  `inputArray = [-1, -2, -5, -1]`, the output should be  
    `maxSubarray(inputArray) = 0`.  
    The  _contiguous subarray_  with the largest sum is  `[]`, because all others will have negative sum.
    

Input/Output

-   **[execution time limit] 3 seconds (java)**
    
-   **[input] array.integer inputArray**
    
    _Guaranteed constraints:_  
    `1 ≤ inputArray.length ≤ 10`,  
    `-10 ≤ inputArray[i] ≤ 10`.
    
-   **[output] integer**
    
    -   The maximum  _contiguous subarray_  sum.