
Given a list of fractions find the index of the largest one (0-based).

**Example**

For  `numerators = [5, 2, 5]`  and  `denominators = [6, 3, 4]`, the output should be  
`maxFraction(numerators, denominators) = 2`.

`5/4`  is the largest fraction, so the answer is  `2`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer numerators**
    
    Array of integers representing numerators of the fractions.
    
    _Guaranteed constraints:_  
    `2 ≤ numerators.length ≤ 10`,  
    `1 ≤ numerators[i] ≤ 15`.
    
-   **[input] array.integer denominators**
    
    Array of integers of the same length as  `numerators`  representing denominators where the  `ith`  fraction equals to  `numerators[i] / denominators[i]`.
    
    _Guaranteed constraints:_  
    `denominators.length = numerators.length`,  
    `1 ≤ denominators[i] ≤ 15`.
    
-   **[output] integer**
    
    -   Index of the largest fraction assuming that none of the fractions are equal.