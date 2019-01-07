
Given a sequence, check whether it is  cyclic increasing.

**Example**

-   For  `sequence = [5, 9, 1, 2, 4]`, the output should be  
    `cyclicSequence(sequence) = true`.
    
    Increasing sequence can be started from number  `1`.
    
-   For  `sequence = [1, 3, 2]`, the output should be  
    `cyclicSequence(sequence) = false`.
    

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer sequence**
    
    _Guaranteed constraints:_  
    `1 ≤ sequence.length ≤ 105`,  
    `-105  ≤ sequence[i] ≤ 105`.
    
-   **[output] boolean**
    
    -   `true`  if  `sequence`  is cyclic increasing,  `false`otherwise.