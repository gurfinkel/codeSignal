
Write a function that takes an integer  `n`  and returns all of the ways that integers not greater than  `n`  can be multiplied together in order to equal  `n`. Do not repeat sets of factors - for instance, if the output contains  `[4, 3]`, it shouldn't also contain  `[3, 4]`. Both your sets and the numbers in the sets should be sorted in descending order.  `1`  should only be included in a set if the set also contains  `n`.

Example

For  `n = 12`, the output should be  
`setsOfFactors(n) = [[12, 1], [6, 2], [4, 3], [3, 2, 2]]`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer n**
    
    _Guaranteed constraints:_  
    `2 ≤ n ≤ 1000`.
    
-   **[output] array.array.integer**
    
    -   An array that contains sets with all of the different ways that numbers smaller than  `n`  can be multiplied together to equal  `n`.
