
_Triangular Numbers_  are positive integers that can be represented as a sum of all integers from  `1`  up to some  `n`. Determine if the given number is Triangular.

Example

-   For  `value = 10`, the output should be  
    `isSum(value) = true`.
    
    Explanation:  `10 = 1 + 2 + 3 + 4`.
    
-   For  `value = 11`, the output should be  
    `isSum(value) = false`.
    
    `1 + 2 + 3 + 4 = 10 < value < 15 = 1 + 2 + 3 + 4 + 5`.
    

Input/Output

-   **[execution time limit] 4 seconds (py3)**
    
-   **[input] integer value**
    
    A positive integer.
    
    _Guaranteed constraints:_  
    `1 ≤ value ≤ 1000`.
    
-   **[output] boolean**
    
    -   `true`  if  `value`  is a triangular number,  `false`otherwise.