
Given a set of circles find the area of the  axis-aligned minimum bounding box  of the set of points which belong to at least one of the given circles.

Example

For  `x = [1, 0, 4]`,  `y = [-1, 2, 2]`, and  `r = [3, 5, 4]`, the output should be  
`axisAlignedCirclesBoundingBox(x, y, r) = 143`.

In the image below circles are given in blue, green and yellow, and the  _axis-aligned minimum bounding box_  is given in red. Its area is  `13 * 11 = 143`.

![](https://codefightsuserpics.s3.amazonaws.com/tasks/axisAlignedCirclesBoundingBox/img/plot.png?_tm=1530791188547)

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer x**
    
    Non-empty array of integers representing  `X`coordinates of the centers of the circles on the plane.
    
    _Guaranteed constraints:_  
    `2 ≤ x.length ≤ 5`,  
    `-10 ≤ x[i] ≤ 10`.
    
-   **[input] array.integer y**
    
    Array of integers representing  `Y`  coordinates of the circle centers.
    
    _Guaranteed constraints:_  
    `y.length = x.length`,  
    `-10 ≤ y[i] ≤ 10`.
    
-   **[input] array.integer r**
    
    Array of positive integers representing circle radii.  `ith`  elements of  `x`,  `y`  and  `r`  correspond to a single circle.
    
    _Guaranteed constraints:_  
    `r.length = x.length`,  
    `1 ≤ r[i] ≤ 10`.
    
-   **[output] integer**
    
    -   Area of  _axis-aligned minimum bounding box_  for the above-mentioned set of points.