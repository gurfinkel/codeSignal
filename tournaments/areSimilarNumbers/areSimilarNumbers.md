
Call two integers  `a`  and  `b`  _similar_  if  `divisor`divides both  `a`  and  `b`  or if it doesn't divide either.

Given integers  `a`,  `b`  and  `divisor`, check if  `a`and  `b`  are  _similar_.

Example

-   For  `a = 10`,  `b = 12`, and  `divisor = 2`, the output should be  
    `areSimilarNumbers(a, b, divisor) = true`;
-   For  `a = 10`,  `b = 12`, and  `divisor = 3`, the output should be  
    `areSimilarNumbers(a, b, divisor) = false`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer a**
    
    _Guaranteed constraints:_  
    `2 ≤ a ≤ 130`.
    
-   **[input] integer b**
    
    _Guaranteed constraints:_  
    `2 ≤ b ≤ 130`.
    
-   **[input] integer divisor**
    
    A positive integer.
    
    _Guaranteed constraints:_  
    `2 ≤ divisor ≤ 15`.
    
-   **[output] boolean**
    
    -   `true`  if  `a`  and  `b`  are  _similar_  in respect of  `divisor`,  `false`  otherwise.