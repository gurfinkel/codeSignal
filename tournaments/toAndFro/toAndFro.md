
A person is moving along a straight line. Initially he is at point  `A`. He goes to point  `B`from  `A`  with speed equal to  `1`  meter per second. Immediately after reaching  `B`  he turns around and heads to  `A`  from  `B`  with the same speed. After reaching point  `A`  he turns around once again and heads to  `B`. etc. We need an algorithm that identifies the location of the person at any given moment in time.

It's guaranteed that  `A`  and  `B`  are two different points.

Example

For  `a = 2`,  `b = 4`, and  `t = 3`, the output should be  
`toAndFro(a, b, t) = 3`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer a**
    
    Coordinate of point  `A`  (in meters).
    
    _Guaranteed constraints:_  
    `1 ≤ a ≤ 109`.
    
-   **[input] integer b**
    
    Coordinate of point  `B`  (in meters).
    
    _Guaranteed constraints:_  
    `1 ≤ b ≤ 109`,  
    `b ≠ a`.
    
-   **[input] integer t**
    
    A positive integer representing time (in seconds).
    
    _Guaranteed constraints:_  
    `3 ≤ t ≤ 109`.
    
-   **[output] integer**
    
    -   Coordinate of the person  `t`  seconds after he left  `A`.