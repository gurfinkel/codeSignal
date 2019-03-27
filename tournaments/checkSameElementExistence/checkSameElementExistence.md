
Given two sorted arrays of integers, check if there is at least one element which occurs in both arrays.

Example

-   For  `arr1 = [1, 2, 3, 5]`  and  `arr2 = [1, 4, 5]`, the output should be  
    `checkSameElementExistence(arr1, arr2) = true`;
-   For  `arr1 = [1, 3, 5]`  and  `arr2 = [-2, 0, 2, 4, 6]`, the output should be  
    `checkSameElementExistence(arr1, arr2) = false`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer arr1**
    
    Sorted in ascending order array of integers.
    
    _Guaranteed constraints:_  
    `1 ≤ arr1.length ≤ 105`,  
    `-106  ≤ arr1[i] ≤ 106`.
    
-   **[input] array.integer arr2**
    
    Sorted in ascending order array of integers.
    
    _Guaranteed constraints:_  
    `1 ≤ arr2.length ≤ 105`,  
    `-106  ≤ arr2[i] ≤ 106`.
    
-   **[output] boolean**