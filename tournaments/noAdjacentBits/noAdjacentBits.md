
Given a positive integer, check if it doesn't contain a pair of adjacent bits set to  `1`  in its binary representation.

Example

-   For  `a = 22`, the output should be  
    `noAdjacentBits(a) = false`.
    
    `22`  equals to  `10110`  in binary, which has a pair of  `1`  bits, so the answer is  `false`.
    
-   For  `a = 41`, the output should be  
    `noAdjacentBits(a) = true`.
    
    `41`  equals to  `101001`  in binary, which doesn't have adjacent  `1`  bits, so the answer is  `true`.
    

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer a**
    
    A positive integer.
    
    _Guaranteed constraints:_  
    `1 ≤ a ≤ 109`.
    
-   **[output] boolean**
    
    -   `true`  if  `a`  doesn't contain a pair of adjacent bits set to  `1`,  `false`  otherwise.