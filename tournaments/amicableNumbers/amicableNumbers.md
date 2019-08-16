
Define  `d(k)`  as the sum of  proper divisors  of  `k`.

A positive integer  `a`  is called  _an amicable number_  if there exists another positive integer  `b`  (`b ≠ a`) such that  `d(a) = b`  and  `d(b) = a`  (numbers  `a`  and  `b`  form  _an amicable pair_).

Find the smallest amicable number not less than the given integer.

Example

-   For  `n = 1`, the output should be  
    `amicableNumbers(n) = 220`;
-   For  `n = 200`, the output should be  
    `amicableNumbers(n) = 220`;
-   For  `n = 221`, the output should be  
    `amicableNumbers(n) = 284`.

The two smallest amicable numbers are  `220`and  `284`.

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] integer n**
    
    _Guaranteed constraints:_  
    `1 ≤ n ≤ 1200`.
    
-   **[output] integer**
    
    -   The smallest amicable number not less than  `n`.