
Given timestamps  `time1`  and  `time2`, return  `true`  if  `time1`  is strictly earlier than  `time2`  and  `false`otherwise.

Example

-   For  `time1 = [22, 30]`  and  `time2 = [10, 59]`, the output should be  
    `isEarlier(time1, time2) = false`;
-   For  `time1 = [0, 5]`  and  `time2 = [1, 0]`, the output should be  
    `isEarlier(time1, time2) = true`.

Input/Output

-   **[execution time limit] 4 seconds (py3)**
    
-   **[input] array.integer time1**
    
    An array representing a timestamp in the format  `[hours, minutes]`.
    
    _Guaranteed constraints:_  
    `time1.length = 2`,  
    `0 ≤ time1[0] ≤ 23`,  
    `0 ≤ time1[1] ≤ 59`.
    
-   **[input] array.integer time2**
    
    An array of the same format as  `time1`representing another timestamp (assume the same day).  
    _Guaranteed constraints:_  
    `time2.length = 2`,  
    `0 ≤ time2[0] ≤ 23`,  
    `0 ≤ time2[1] ≤ 59`.
    
-   **[output] boolean**
    
    -   `true`  if the timestamp in  `time1`  is strictly earlier than in  `time2`,  `false`  otherwise.