
Given a  `sequence`  of numbers in an array, find the length of its  _longest increasing subsequence_  (_LIS_).  
The  _longest increasing subsequence_  is a subsequence of a given  `sequence`  in which the subsequence's elements are in strictly increasing order, and in which the subsequence is as long as possible. This subsequence is not necessarily contiguous or unique.

Example

For  `sequence = [1, 231, 2, 4, 89, 32, 12, 234, 33, 90, 34, 100]`, the output should be  
`longestIncreasingSubsequence(sequence) = 7`.

The  _LIS_  itself is  `[1, 2, 4, 32, 33, 34, 100]`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer sequence**
    
    An array describing a sequence.
    
    _Guaranteed constraints:_  
    `1 ≤ sequence.length ≤ 1000`,  
    `0 ≤ sequence[i] ≤ 106`.
    
-   **[output] integer**
    
    -   The length of the  _longest increasing subsequence_  of a given  `sequence`.