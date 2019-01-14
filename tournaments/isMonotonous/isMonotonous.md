
Given array of integers, check if it represents either a  _strictly increasing_  or a  _strictly decreasing_sequence.

Example

-   For  `sequence = [1, 4, 5, 7, 9]`, the output should be  
    `isMonotonous(sequence) = true`;
-   For  `sequence = [0]`, the output should be  
    `isMonotonous(sequence) = true`;
-   For  `sequence = [3, 3]`, the output should be  
    `isMonotonous(sequence) = false`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer sequence**
    
    _Guaranteed constraints:_  
    `1 ≤ sequence.length ≤ 10`,  
    `-250 ≤ sequence[i] ≤ 250`.
    
-   **[output] boolean**
    
    -   `true`  if  `sequence`  is either  _strictly increasing_  or  _strictly decreasing_,  `false`  otherwise.