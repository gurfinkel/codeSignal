
You're given an integer  `n`.

-   If  `n`  is even, divide it by  `2`.
-   If  `n`  is odd, change it to  `3 * n + 1`.

Repeat the process until  `n = 1`. Return the number of steps performed by the above algorithm.

Example

For  `n = 5`, the output should be  
`hailstoneSequence(n) = 5`.

The sequence is  `5 -> 16 -> 8 -> 4 -> 2 -> 1`, so the number of steps is  `5`.

Input/Output

-   **[execution time limit] 4 seconds (py3)**
    
-   **[input] integer n**
    
    _Guaranteed constraints:_  
    `1 ≤ n ≤ 30`.
    
-   **[output] integer**