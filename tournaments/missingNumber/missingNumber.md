
You are supposed to label a bunch of boxes with numbers from  `0`  to  `n`, and all the labels are stored in the array  `arr`. Unfortunately one of the labels is missing. Your task is to find it.

Example

For  `arr = [3, 1, 0]`, the output should be  
`missingNumber(arr) = 2`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer arr**
    
    An unsorted array consisting of different integers from  `0`  to  `n`  inclusive, with only one of them missing.
    
    _Guaranteed constraints:_  
    `1 ≤ arr.length ≤ 1000`,  
    `0 ≤ arr[i] ≤ arr.length`.
    
-   **[output] integer**
    
    -   The missing number.