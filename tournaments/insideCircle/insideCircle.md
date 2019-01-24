
Given the center and the radius of a circle and the coordinates of a point determine if the point is inside (or on the border of) the circle.

Example

-   For  `point = [1, 1]`,  `center = [2, 2]`, and  `radius = 1`, the output should be  
    `insideCircle(point, center, radius) = false`.
    
    ![](https://codefightsuserpics.s3.amazonaws.com/tasks/insideCircle/img/example1.png?_tm=1530799040205)
    
-   For  `point = [1, 1]`,  `center = [0, 0]`, and  `radius = 3`, the output should be  
    `insideCircle(point, center, radius) = true`.
    
    ![](https://codefightsuserpics.s3.amazonaws.com/tasks/insideCircle/img/example2.png?_tm=1530799040477)
    

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer point**
    
    Array of length 2 representing a point.
    
    _Guaranteed constraints:_  
    `-100 ≤ point[i] ≤ 100`.
    
-   **[input] array.integer center**
    
    Array of length 2 representing the center of a circle.
    
    _Guaranteed constraints:_  
    `-10 ≤ center[i] ≤ 10`.
    
-   **[input] integer radius**
    
    Radius of the circle.
    
    _Guaranteed constraints:_  
    `1 ≤ radius ≤ 5`.
    
-   **[output] boolean**
    
    -   `true`  if  `point`  is inside the circle centered at  `center`  with radius equal to  `radius`(or on its border),  `false`  otherwise.