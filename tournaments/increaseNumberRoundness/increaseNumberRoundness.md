
Define an integer's  _roundness_  as the number of trailing zeroes in it.

Given an integer  `n`, check if it's possible to increase  `n`'s roundness by swapping some pair of its digits.

Example

-   For  `n = 902200100`, the output should be  
    `increaseNumberRoundness(n) = true`.
    
    One of the possible ways to increase  _roundness_  of  `n`  is to swap digit  `1`  with digit  `0`  preceding it:  _roundness_  of  `902201000`  is  `3`, and  _roundness_  of  `n`  is  `2`.
    
    For instance, one may swap the leftmost  `0`with  `1`.
    
-   For  `n = 11000`, the output should be  
    `increaseNumberRoundness(n) = false`.
    
    _Roundness_  of  `n`  is  `3`, and there is no way to increase it.
    

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] integer n**
    
    A positive integer.
    
    _Guaranteed constraints:_  
    `100 ≤ n ≤ 109`.
    
-   **[output] boolean**
    
    -   `true`  if it's possible to increase  `n`'s roundness,  `false`  otherwise.