
Check if the given point belongs to the given  line.

Example

-   For  `point = [0, 1]`  and  `line = [1, 1, 0]`, the output should be  
    `pointInLine(point, line) = false`;
-   For  `point = [1, -1]`  and  `line = [1, 1, 0]`, the output should be  
    `pointInLine(point, line) = true`.

Check out the image below for better understanding:

![](https://codesignal.s3.amazonaws.com/tasks/pointInLine/img/example.png?_tm=1582079061814)

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer point**
    
    The coordinates of the point  `[x, y]`.
    
    _Guaranteed constraints:_  
    `-100 ≤ point[i] ≤ 100`.
    
-   **[input] array.integer line**
    
    The line in the form:  `line[0] · x + line[1] · y + line[2] = 0`.
    
    _Guaranteed constraints:_  
    `-100 ≤ line[i] ≤ 100`.
    
-   **[output] boolean**
    
    -   `true`  if the point is on the line,  `false`  otherwise.
