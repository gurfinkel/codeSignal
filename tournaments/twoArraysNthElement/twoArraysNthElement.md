
Given two sorted arrays of integers and an integer  `n`, find the  `nth`  _(0-based)_  element of their sorted union.

**Example**

For  `array1 = [1, 3, 4]`,  `array2 = [2, 6, 8]`, and  `n = 5`, the output should be  
`twoArraysNthElement(array1, array2, n) = 8`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer array1**
    
    Sorted array of distinct integers.
    
    _Guaranteed constraints:_  
    `0 ≤ array1.length ≤ 5`,  
    `1 ≤ array1[i] ≤ 10`.
    
-   **[input] array.integer array2**
    
    Sorted array of distinct integers. It is guaranteed that no integer is contained in both  `array1`  and  `array2`.
    
    _Guaranteed constraints:_  
    `0 ≤ array2.length ≤ 5`,  
    `1 ≤ array2[i] ≤ 10`.
    
-   **[input] integer n**
    
    Non-negative integer less than the summary size of  `array1`  and  `array2`.
    
    _Guaranteed constraints:_  
    `0 ≤ n < array1.length + array2.length`.
    
-   **[output] integer**