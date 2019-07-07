
Two  lines  `ax + by + c = 0`  and  `a'x + b'y + c' = 0`  are orthogonal if and only if  
`a * a' + b * b' = 0`.

Check if the two given lines are orthogonal.

Example

For  `line1 = [1, -1, 0]`  and  `line2 = [1, 1, 0]`, the output should be  
`orthogonalLines(line1, line2) = true`.

Check out the image below for better understanding:

![](https://codesignal.s3.amazonaws.com/tasks/orthogonalLines/img/example.png?_tm=1551538529207)

Input/Output

-   **[execution time limit] 4 seconds (perl)**
    
-   **[input] array.integer line1**
    
    The first line as an array of  `3`  numbers  `[a, b, c]`.
    
    _Guaranteed constraints:_  
    `-100 ≤ line1[i] ≤ 100`.
    
-   **[input] array.integer line2**
    
    The second line as an array of  `3`  numbers  `[a, b, c]`.
    
    _Guaranteed constraints:_  
    `-100 ≤ line2[i] ≤ 100`.
    
-   **[output] boolean**
    
    -   `true`  if the given lines are orthogonal,  `false`  otherwise.