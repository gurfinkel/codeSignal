
Given a set of complex values, find their product.

**Example**

For  `real = [1, 2]`  and  `imag = [1, 3]`, the output should be  
`arrayComplexElementsProduct(real, imag) = [-1, 5]`.  
The task is to calculate product of  `1 + 1 * i`  and  `2 + 3 * i`, so the answer is  `(1 + 1i) * (2 + 3i) = -1 + 5i`.

Input/Output

-   **[execution time limit] 4 seconds (py3)**
    
-   **[input] array.integer real**
    
    Array of integers representing real parts of some complex numbers.
    
    _Guaranteed constraints:_  
    `2 ≤ real.length ≤ 5`,  
    `0 ≤ real[i] ≤ 5`.
    
-   **[input] array.integer imag**
    
    Array of integers of the same length as  `real`representing imaginary parts of the same set of complex numbers.  `ith`  elements of both  `imag`and  `real`  correspond to the same complex value.
    
    _Guaranteed constraints:_  
    `imag.length = real.length`,  
    `0 ≤ imag[i] ≤ 5`.
    
-   **[output] array.integer**
    
    -   Array of two integers representing the product of all the given complex values: the first element should be equal to the real part of the product and the second one to the imaginary part.