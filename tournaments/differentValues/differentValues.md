
Given an array  `a`  and an integer  `d`, find two elements of the array such that their absolute difference is not greater than  `d`  but is as close to  `d`as possible (there may be more than one such pair). Return the absolute difference between these two elements or  `-1`  if no suitable pairs were found.

Example

-   For  `a = [3, 2, 1]`  and  `d = 2`, the output should be  
    `differentValues(a, d) = 2`;
-   For  `a = [3, 7]`  and  `d = 3`, the output should be  
    `differentValues(a, d) = -1`.

Input/Output

-   **[execution time limit] 4 seconds (py3)**
    
-   **[input] array.integer a**
    
    Array of different integers.
    
    _Guaranteed constraints:_  
    `2 ≤ a.length ≤ 10`,  
    `-40 ≤ a[i] ≤ 40`.
    
-   **[input] integer d**
    
    a positive integer.
    
    _Guaranteed constraints:_  
    `2 ≤ d ≤ 10`.
    
-   **[output] integer**
    
    -   The best possible absolute difference or  `-1`  if no suitable pairs were found.