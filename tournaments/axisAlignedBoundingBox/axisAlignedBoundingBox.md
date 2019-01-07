
Given a set of points on the plane, find the area of its  axis-aligned minimum bounding box.

Example

For  `x = [1, 0, 4]`  and  `y = [-1, 2, 2]`, the output should be  
`axisAlignedBoundingBox(x, y) = 12`.

In the image below points are given in blue, and the  _axis-aligned minimum bounding box_  is given in red. Its area is  `3 * 4 = 12`.

![](https://codefightsuserpics.s3.amazonaws.com/tasks/axisAlignedBoundingBox/img/plot.png?_tm=1530791186473)

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer x**
    
    Non-empty array of integers representing the  `X`coordinates of the points on the plane.
    
    _Guaranteed constraints:_  
    `2 ≤ x.length ≤ 5`,  
    `-10 ≤ x[i] ≤ 10`.
    
-   **[input] array.integer y**
    
    Array of integers representing the  `Y`  coordinates of the points.  `ith`  elements of both  `x`  and  `y`correspond to a single point.
    
    _Guaranteed constraints:_  
    `y.length = x.length`,  
    `-10 ≤ y[i] ≤ 10`.
    
-   **[output] integer**
    
    -   The desired area.