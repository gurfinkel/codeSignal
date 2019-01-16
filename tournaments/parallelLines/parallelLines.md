
Two  lines  `ax + by + c = 0`  and  `a'x + b'y + c' = 0`  are parallel if and only if  
`a * b' = b * a'`.

Check if the two given lines are parallel.

Example

For  `line1 = [1, -1, 0]`  and  `line2 = [1, 1, 0]`, the output should be  
`parallelLines(line1, line2) = false`.

![](https://codefightsuserpics.s3.amazonaws.com/tasks/parallelLines/img/example.png?_tm=1530802128870)

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer line1**
    
    The first line as an array of  `3`  numbers.
    
    _Guaranteed constraints:_  
    `line1.length = 3`,  
    `-20 ≤ line1[i] ≤ 20`.
    
-   **[input] array.integer line2**
    
    The second line as an array of  `3`  numbers.
    
    _Guaranteed constraints:_  
    `line2.length = 3`,  
    `-20 ≤ line2[i] ≤ 20`.
    
-   **[output] boolean**
    
    -   `true`  if the given lines are parallel,  `false`otherwise.