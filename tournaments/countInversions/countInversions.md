
The inversion count for an array indicates how far the array is from being sorted. If the array is already sorted, then the inversion count is  `0`. If the array is sorted in reverse order, then the inversion count is the maximum possible value.

Given an array  `a`, find its  inversion  count. Since this number could be quite large, take it modulo  `109  + 7`.

Example

For  `a = [3, 1, 5, 6, 4]`, the output should be  `countInversions(a) = 3`.

The three inversions in this case are:  `(3, 1)`,  `(5, 4)`,  `(6, 4)`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer a**
    
    _Guaranteed constraints:_  
    `1 ≤ a.length ≤ 105`,  
    `-1000 ≤ a[i] ≤ 1000`.
    
-   **[output] integer**
    
    -   The inversion count of  `a`.