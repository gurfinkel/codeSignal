
Equilibrium position in an array is a position at which the sum of elements before it is equal to the sum of elements after it. Given an array  `arr`, your task is to determine at which position equilibrium first occurs in the array. If there is no equilibrium position, the answer should be  `-1`.

Example

-   For  `arr = [5]`, the output should be  
    `equilibriumPoint(arr) = 1`.
    
    Explanation: Since this array only has one element, the equilibrium point is at position  `1`.
    
-   For  `arr = [10, 5, 3, 5, 2, 2, 6, 8]`, the output should be  
    `equilibriumPoint(arr) = 4`.
    
    Explanation: The equilibrium point is at position  `4`, because the sum of elements before it -  `(10 + 5 + 3)`  - is equal to the sum of elements after it -  `(2 + 2 + 6 + 8)`.
    

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer arr**
    
    _Guaranteed constraints:_  
    `1 ≤ arr.length ≤ 10^5`,  
    `-1000 ≤ arr[i] ≤ 1000`.
    
-   **[output] integer**
    
    -   The first equilibrium position in  `arr`, or  `-1`.
