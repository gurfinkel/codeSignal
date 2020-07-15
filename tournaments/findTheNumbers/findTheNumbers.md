
_Try to solve this challenge with linear complexity and using  `O(1)`  additional memory, since this is what you would be asked to do during a real interview._

You have an array  `a`  containing  `2 * n + 2`  positive numbers, in which  `n`  numbers occur twice and two other numbers occur only once and are distinct. Find the two distinct numbers and return them in ascending order.

Example

-   For  `a = [1, 3, 5, 6, 1, 4, 3, 6]`, the output should be  
    `findTheNumbers(a) = [4, 5]`;
-   For  `a = [4, 5, 6, 5, 3, 4]`, the output should be  
    `findTheNumbers(a) = [3, 6]`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer a**
    
    An array that contains  `2 * n + 2`  positive integers.
    
    _Guaranteed constraints:_  
    `2 ≤ a.length ≤ 10^5`,  
    `a.length`  is even,  
    `1 ≤ a[i] ≤ 10^9`.
    
-   **[output] array.integer**
    
    -   Two non-repeated elements in ascending order.
