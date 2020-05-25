
A rectangle with sides equal to even integers  `a`  and  `b`  is drawn on the Cartesian plane. Its center (the intersection point of its diagonals) coincides with the point  `(0, 0)`, but the sides of the rectangle are not parallel to the axes; instead, they are forming  `45`  degree angles with the axes.

How many points with integer coordinates are located inside the given rectangle (including on its sides)?

Example

For  `a = 6`  and  `b = 4`, the output should be  
`rectangleRotation(a, b) = 23`.

The following picture illustrates the example, and the  `23`  points are marked green.

![](https://codesignal.s3.amazonaws.com/tasks/rectangleRotation/img/rectangle.png?_tm=1582083113018)

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] integer a**
    
    A positive even integer.
    
    _Guaranteed constraints:_  
    `2 ≤ a ≤ 50`.
    
-   **[input] integer b**
    
    A positive even integer.
    
    _Guaranteed constraints:_  
    `2 ≤ b ≤ 50`.
    
-   **[output] integer**
    
    -   The number of inner points with integer coordinates.