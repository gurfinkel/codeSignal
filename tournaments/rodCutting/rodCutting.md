
Serling Enterprises buys long steel rods and cuts them into shorter rods, which it then sells. Each cut is free. Given a rod of length  `n`  and an array of prices  `v`, where  `v[i]`  stands for the price of a piece with a length of  `i`, determine the maximum revenue that you can obtain by cutting up the rod and selling the pieces.

Example

For  `n = 4`  and  `v = [0, 2, 4, 7, 7]`, the output should be  
`rodCutting(n, v) = 9`.

A rod with a length of  `4`  costs  `7`. You can cut it into  `4`  pieces of length  `1`  - this variant will have a revenue of  `8`. You can cut it into  `2`  pieces of length  `2`  - this variant will also have a revenue of  `8`. You can also cut it into pieces of lengths  `1`  and  `3`  - this variant will have a revenue of  `2 + 7 = 9`, which is the maximum possible.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer n**
    
    An integer that represents the length of the original steel rod.
    
    _Guaranteed constraints:_  
    `1 ≤ n ≤ 1000`.
    
-   **[input] array.integer v**
    
    An array of integer prices, where  `v[i]`  stands for the price of a piece that has a length of  `i`.
    
    _Guaranteed constraints:_  
    `v.length = n + 1`,  
    `v[0] = 0`,  
    `0 ≤ v[i] ≤ 1000, i ≠ 0`.
    
-   **[output] integer**
    
    -   The maximum revenue possible.