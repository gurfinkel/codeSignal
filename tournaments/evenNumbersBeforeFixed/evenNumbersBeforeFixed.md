
Given array of integers  `sequence`  and some integer  `fixedElement`, output the number of even values in  `sequence`  before the first occurrence of  `fixedElement`  or  `-1`  if  `fixedElement`  is not contained in  `sequence`.

Example

For  `sequence = [1, 4, 2, 6, 3, 1]`  and  `fixedElement = 6`, the output should be  
`evenNumbersBeforeFixed(sequence, fixedElement) = 2`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer sequence**
    
    A non-empty array of positive integers.
    
    _Guaranteed constraints:_  
    `4 ≤ sequence.length ≤ 10`,  
    `1 ≤ sequence[i] ≤ 10`.
    
-   **[input] integer fixedElement**
    
    _Guaranteed constraints:_  
    `2 ≤ fixedElement ≤ 10`.
    
-   **[output] integer**