
Define an integer's  _roundness_  as the number of trailing zeros in it. Sometimes it is possible to increase a number's  _roundness_  by swapping two of its digits.

Given an integer  `n`, find the minimum number of swaps required to maximize  `n`'s roundness.

Example

-   For  `n = 902200100`, the output should be  
    `maximizeNumberRoundness(n) = 1`.
    
    It's enough to swap the leftmost  `0`  with  `1`.
    
-   For  `n = 11000`, the output should be  
    `maximizeNumberRoundness(n) = 0`.
    
    `n`  already has the maximum roundness possible.
    

Input/Output

-   **[execution time limit] 3 seconds (java)**
    
-   **[input] integer n**
    
    A positive integer.
    
    _Guaranteed constraints:_  
    `104  ≤ n ≤ 109`.
    
-   **[output] integer**
    
    -   The minimum number of swaps required to maximize  `n`'s roundness.