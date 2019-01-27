
You're given two integers,  `n`  and  `m`. Find position of the rightmost pair of equal bits in their binary representations (it is guaranteed that such a pair exists), counting from right to left.

Return the value of  `2position_of_the_found_pair`  (0-based).

**Example**

For  `n = 10`  and  `m = 11`, the output should be  
`equalPairOfBits(n, m) = 2`.

`1010  = 10**1**02`,  `1110  = 10**1**12`, the position of the rightmost pair of equal bits is the bit at position  `1`(0-based) from the right in the binary representations.  
So the answer is  `21  = 2`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer n**
    
    _Guaranteed constraints:_  
    `0 ≤ n ≤ 230`.
    
-   **[input] integer m**
    
    _Guaranteed constraints:_  
    `0 ≤ m ≤ 230`.
    
-   **[output] integer**