
You have three sorted arrays of integers:  `a`,  `b`, and  `c`. Let's define  `distance(x, y, z)`  as  `|x - y| + |y - z| + |x - y|`. Find and return the minimum possible  `distance(x, y, z)`, such that  `x`  is an element of  `a`,  `y`  is an element of  `b`, and  `z`  is an element of  `c`.

Example

For  `a = [4, 30]`,  `b = [6, 12, 20]`, and  `c = [10, 37]`, the output should be  
`minDistTriplet(a, b, c) = 12`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer a**
    
    A sorted array.
    
    _Guaranteed constraints:_  
    `1 ≤ a.length ≤ 104`,  
    `0 ≤ a[i] ≤ 108`.
    
-   **[input] array.integer b**
    
    A sorted array.
    
    _Guaranteed constraints:_  
    `1 ≤ b.length ≤ 10^4`,  
    `0 ≤ b[i] ≤ 10^8`.
    
-   **[input] array.integer c**
    
    A sorted array.
    
    _Guaranteed constraints:_  
    `1 ≤ c.length ≤ 10^4`,  
    `0 ≤ c[i] ≤ 10^8`.
    
-   **[output] integer**
    
    -   The minimum possible  `distance(x, y, z)`, such that  `x`  is an element of  `a`,  `y`  is an element of  `b`, and  `z`  is an element of  `c`.
