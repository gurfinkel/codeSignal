
Given the first two elements of an  arithmetic progression, find its  `nth`  element.

Example

For  `element1 = 3`,  `element2 = 2`, and  `n = 4`, the output should be  
`arithmeticProgression(element1, element2, n) = 0`.

The difference between two consecutive elements of the  _arithmetic progression_  is  `element2 - element1 = -1`. Thus, the third element of the  _progression_  is  `1`, and the fourth one is  `0`, which is the answer.

Input/Output

-   **[execution time limit] 3 seconds (java)**
    
-   **[input] integer element1**
    
    The  `1st`  element of the  _arithmetic progression_.
    
    _Guaranteed constraints:_  
    `0 ≤ element1 ≤ 10`.
    
-   **[input] integer element2**
    
    The  `2nd`  element of the  _arithmetic progression_.
    
    _Guaranteed constraints:_  
    `0 ≤ element2 ≤ 10`.
    
-   **[input] integer n**
    
    A positive integer.
    
    _Guaranteed constraints:_  
    `4 ≤ n ≤ 104`.
    
-   **[output] integer**
    
    -   The  `nth`  element of the  _arithmetic progression_.