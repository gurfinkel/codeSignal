
Given an array of numbers  `arr`, determine whether  `arr`  can be divided into two subsets for which the sum of elements in both subsets is the same.

Example

-   For  `arr = [3, 5, 16, 8]`, the output should be  
    `subsetSum(arr) = true`.
    
    It is possible to partition this array into two subsets that have a sum of  `16`:  `[16]`  and  `[3, 5, 8]`.
    
-   For  `arr = [5, 7, 1]`, the output should be  
    `subsetSum(arr) = false`.
    

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer arr**
    
    The given set of numbers.
    
    _Guaranteed constraints:_  
    `3 ≤ arr.length ≤ 100`,  
    `0 ≤ arr[i] ≤ 1000`.
    
-   **[output] boolean**
    
    -   Return  `true`  if  `arr`  can be divided into two subsets, the elements of which have equal sums. Return  `false`  otherwise.