
Given length of a triangle sides, check if it is  isosceles.

Example

-   For  `sides = [4, 3, 2]`, the output should be  
    `isoscelesTriangle(sides) = false`;
-   For  `sides = [5, 3, 5]`, the output should be  
    `isoscelesTriangle(sides) = true`.

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] array.integer sides**
    
    Array of three integers representing lengths of triangle sides. It is guaranteed that the triangle is valid, but it may be degenerate.
    
    _Guaranteed constraints:_  
    `1 ≤ sides[i] ≤ 100`,  
    `sides[i] + sides[j] >= sides[k]`.
    
-   **[output] boolean**
    
    -   `true`  if the triangle with sides from the  `sides`  array is isosceles,  `false`otherwise.