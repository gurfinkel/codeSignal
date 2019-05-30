
Find the number of  fixed points  in a permutation of  `[1, 2, 3, ..., n]`  for some  `n`.

Example

For  `permutation = [1, 3, 2, 4, 5, 6]`, the output should be  
`fixedPointsPermutation(permutation) = 4`.

The answer is  `4`  since  `1`,  `4`,  `5`  and  `6`stayed in the same positions.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer permutation**
    
    Array of length  `n`  representing some permutation of integers from  `1`  to  `n`.
    
    _Guaranteed constraints:_  
    `3 ≤ permutation.length ≤ 10`.
    
-   **[output] integer**
    
    -   The number of fixed points in  `permutation`.