
Given a sequence of integers find the length of its largest  subsequence  that forms an  arithmetic progression.

Example

For  `a = [1, 7, 3, 5, 4, 2]`, the output should be  
`longestSequence(a) = 3`.

Explanation:  `[1, 3, 5]`  is a  _subsequence_that's also an  _arithmetic progression_.

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] array.integer a**
    
    An array of integers which represents a sequence.
    
    _Guaranteed constraints:_  
    `1 ≤ a.length ≤ 20`,  
    `-250 ≤ a[i] ≤ 250`.
    
-   **[output] integer**
    
    -   The length of the required  _subsequence_where the elements need to be in the same order as in the initial sequence. The difference of the progression (difference between adjacent elements of the progression) must be nonzero, but the length of the progression can be equal to  `1`.