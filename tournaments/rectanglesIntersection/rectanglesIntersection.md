
A rectangle with sides parallel to the axes can be written as a pair of opposing vertices' coordinates of this rectangle.

Find the area of the intersection of two rectangles given in the described format.

Example

For  `a = [0, 0]`,  `b = [2, 2]`,  `c = [1, 1]`, and  `d = [3, 3]`, the output should be  
`rectanglesIntersection(a, b, c, d) = 1`.

Check out the image below for better understanding:

![](https://codesignal.s3.amazonaws.com/tasks/rectanglesIntersection/img/example.png?_tm=1551538643756)

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] array.integer a**
    
    Array of two integers - coordinates of the first rectangle's first vertex.
    
    _Guaranteed constraints:_  
    `a.length = 2`,  
    `-104  ≤ a[i] ≤ 104`.
    
-   **[input] array.integer b**
    
    Array of two integers - coordinates of the first rectangle's second vertex.
    
    _Guaranteed constraints:_  
    `b.length = 2`,  
    `-104  ≤ b[i] ≤ 104`,  
    `b[i] ≠ a[i]`.
    
-   **[input] array.integer c**
    
    Array of two integers - coordinates of the second rectangle's first vertex.
    
    _Guaranteed constraints:_  
    `c.length = 2`,  
    `-104  ≤ c[i] ≤ 104`.
    
-   **[input] array.integer d**
    
    Array of two integers - coordinates of the second rectangle's second vertex.
    
    _Guaranteed constraints:_  
    `d.length = 2`,  
    `-104  ≤ d[i] ≤ 104`,  
    `d[i] ≠ c[i]`.
    
-   **[output] integer**
    
    -   Area of the intersection of rectangles (`0`if they don't intersect).