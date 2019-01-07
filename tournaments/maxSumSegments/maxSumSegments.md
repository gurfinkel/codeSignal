
You are given an array of integers  `inputArray`. Consider all its  contiguous subarrays  of length  `k`and pick the one with the maximum sum. If there are several  _contiguous subarrays_  with the maximum sum, pick the leftmost one. Put the  `0`-based index of the first (leftmost) element of that subarray into  `result[k - 1]`. Do this for all  `k`  from  `1`  up to the length of the  `inputArray`. Return  `result`.

**Example**

For  `inputArray = [-1, 2, 1, 3, -2]`, the output should be  
`maxSumSegments(inputArray) = [3, 2, 1, 0, 0]`.  
The  _contiguous subarray_  of length  `1`  is the element with index  `3`, so  `result[0] = 3`; of length  `2`  is subarray  `[1, 3]`, which starts at the index  `2`; of length  `3`  is -  `[2, 1, 3]`, which starts at index  `1`; of length  `4`  -  `[-1, 2, 1, 3]`, which starts at index  `0`; of length  `5`  is an  `inputArray`  itself.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer inputArray**
    
    _Guaranteed constraints:_  
    `4 ≤ inputArray.length ≤ 20`,  
    `-10 ≤ inputArray[i] ≤ 10`.
    
-   **[output] array.integer**
    
    -   An array of  `inputArray.length`  elements, where the number at  `kth`  position (1-based) is the 0-based index from which the contiguous subarray of length  `k`  with the maximum sum starts.