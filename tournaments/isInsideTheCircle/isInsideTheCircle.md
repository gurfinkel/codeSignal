
Given a point and a circle, determine whether the point lies strictly inside the circle.

Example

-   For  `xa = 0`,  `ya = 0`,  `xc = 0`,  `yc = 0`, and  `rc = 1`, the output should be  
    `isInsideTheCircle(xa, ya, xc, yc, rc) = true`.
    
    ![](https://codesignal.s3.amazonaws.com/tasks/isInsideTheCircle/img/example1.png?_tm=1551474815677)
    
-   For  `xa = -1`,  `ya = -1`,  `xc = 0`,  `yc = 0`, and  `rc = 1`, the output should be  
    `isInsideTheCircle(xa, ya, xc, yc, rc) = false`.
    
    ![](https://codesignal.s3.amazonaws.com/tasks/isInsideTheCircle/img/example2.png?_tm=1551474816020)
    

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] integer xa**
    
    `x`  coordinate of the given point.
    
    _Guaranteed constraints:_  
    `-10 ≤ xa ≤ 10`.
    
-   **[input] integer ya**
    
    `y`  coordinate of the given point.
    
    _Guaranteed constraints:_  
    `-10 ≤ ya ≤ 10`.
    
-   **[input] integer xc**
    
    `x`  coordinate of the circle center.
    
    _Guaranteed constraints:_  
    `-10 ≤ xc ≤ 10`.
    
-   **[input] integer yc**
    
    `y`  coordinate of the circle center.
    
    _Guaranteed constraints:_  
    `-10 ≤ yc ≤ 10`.
    
-   **[input] integer rc**
    
    The radius of the circle.
    
    _Guaranteed constraints:_  
    `1 ≤ rc ≤ 5`.
    
-   **[output] boolean**
    
    -   `true`, if the point  `(xa, ya)`  lies inside the circle with center  `(xc, yc)`  and radius  `rc`,  `false`  otherwise.