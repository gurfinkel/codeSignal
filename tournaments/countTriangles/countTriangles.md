
Given a set of points, find the number of triangles with non-zero areas formed by some trio of the given points.

Example

For  `x = [0, 0, 1, 1]`  and  `y = [0, 1, 1, 0]`, the output should be  
`countTriangles(x, y) = 4`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer x**
    
    _Guaranteed constraints:_  
    `3 ≤ x.length ≤ 10`,  
    `-10 ≤ x[i] ≤ 10`.
    
-   **[input] array.integer y**
    
    Array of integers of the same length as  `x`. These arrays represent a set of points  `(x[i], y[i])`. It's guaranteed that no two points coincide.
    
    _Guaranteed constraints:_  
    `y.length = x.length`,  
    `-10 ≤ y[i] ≤ 10`.
    
-   **[output] integer**