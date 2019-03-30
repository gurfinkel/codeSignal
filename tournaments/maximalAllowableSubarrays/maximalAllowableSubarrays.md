
Given an array of integers  `inputArray`  and an integer  `maxSum`, for each  `i`  (`0 ≤ i < length of inputArray`) find the rightmost  `j`  (`j < length of inputArray`) such that the sum of all elements between the  _ith_  and  _jth_  elements (both inclusive) is not greater than  `maxSum`.

Example

For  `inputArray = [2, 3, 0, 1, 2]`  and  `maxSum = 4`, the output should be  
`maximalAllowableSubarrays(inputArray, maxSum) = [0, 3, 4, 4, 4]`.

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] array.integer inputArray**
    
    A non-empty array of  _non-negative_  integers.
    
    _Guaranteed constraints:_  
    `5 ≤ inputArray.length ≤ 104`,  
    `0 ≤ inputArray[i] ≤ 106`.
    
-   **[input] integer maxSum**
    
    A non-negative integer  _not less than each of the array elements_.
    
    _Guaranteed constraints:_  
    `max(inputArray) ≤ maxSum ≤ 109`.
    
-   **[output] array.integer**