
Consider an array of integers  `a`. Let  `min(a)`be its minimal element, and let  `avg(a)`  be its  mean.

Define the  _center_  of the array  `a`  as array  `b`such that:

-   `b`  is formed from  `a`  by erasing some of its elements.
-   For each  `i`,  `|b[i] - avg(a)| < min(a)`.
-   `b`  has the maximum number of elements among all the arrays satisfying the above requirements.

Given an array of integers, return its  _center_.

Example

-   For  `a = [8, 3, 4, 5, 2, 8]`, the output should be  
    `arrayCenter(a) = [4, 5]`.
    
    Here  `min(a) = 2`,  `avg(a) = 5`.
    
-   For  `a = [1, 3, 2, 1]`, the output should be  
    `arrayCenter(a) = [1, 2, 1]`.
    
    Here  `min(a) = 1`,  `avg(a) = 1.75`.
    

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer a**
    
    Unsorted non-empty array of integers.
    
    _Guaranteed constraints:_  
    `2 ≤ a.length ≤ 10`,  
    `1 ≤ a[i] ≤ 350`.
    
-   **[output] array.integer**