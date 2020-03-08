
_Note: Avoid using built-in functions that convert integers to their binary representations. Write the solution that uses  `O(k)`  operations per test, where  `k`  is the number of bits set to  `1`._

Write a function that takes an unsigned (positive) integer and returns the number of  `1`  bits its binary representation contains. This value is also known as the integer's Hamming weight.

Example

For  `n = 13`, the output should be  
`numberOf1Bits(n) = 3`.

`13`  is represented in binary as  `1101`, so the function should return  `3`.

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] integer n**
    
    _Guaranteed constraints:_  
    `0 ≤ n ≤ 231  - 1`.
    
-   **[output] integer**
