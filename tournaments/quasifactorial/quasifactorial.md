
The factorial of  `n`  is defined as the product of all natural numbers up to and including  `n`  -  `1 * 2 * 3 * ... * n`. The  _quasifactorial_  of  `n`  is different in that after each multiplication the result is decreased by one. So the quasifactorial of  `n`  is  `(...((1 * 2 - 1) * 3 - 1) * ... * n - 1)`. The quasifactorial of  `1`  is  `1`.

Given a positive integer  `n`, calculate its quasifactorial.

Example

For  `n = 4`, the output should be  
`quasifactorial(n) = 7`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer n**
    
    _Guaranteed constraints:_  
    `1 ≤ n ≤ 8`.
    
-   **[output] integer**