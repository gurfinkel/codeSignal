
A sequence of integers is called a  _zigzag_  sequence if each of its elements is either strictly less than all its neighbors or strictly greater than all its neighbors. For example, the sequence  `4 2 3 1 5 3`is a  _zigzag_, but  `7 3 5 5 2`  and  `3 8 6 4 5`  aren't. Sequence of length  `1`  is also a  _zigzag_.

For a given array of integers return the length of its longest contiguous sub-array that is a  _zigzag_sequence.

Example

-   For  `a = [9, 8, 8, 5, 3, 5, 3, 2, 8, 6]`, the output should be  
    `zigzag(a) = 4`.
    
    The longest  _zigzag_  sub-arrays are  `[5, 3, 5, 3]`and  `[3, 2, 8, 6]`  and they both have length  `4`.
    
-   For  `a = [4, 4]`, the output should be  
    `zigzag(a) = 1`.
    
    The longest  _zigzag_  sub-array is  `[4]`  - it has only one element, which is strictly greater than all its neighbors (there are none of them).
    

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] array.integer a**
    
    _Guaranteed constraints:_  
    `2 ≤ a.length ≤ 25`,  
    `0 ≤ a[i] ≤ 100`.
    
-   **[output] integer**