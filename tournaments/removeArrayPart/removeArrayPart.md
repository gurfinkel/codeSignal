
Remove a part of a given array between given 0-based indexes  `l`  and  `r`  (inclusive).

Example

For  `inputArray = [2, 3, 2, 3, 4, 5]`,  `l = 2`, and  `r = 4`, the output should be  
`removeArrayPart(inputArray, l, r) = [2, 3, 5]`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer inputArray**
    
    _Guaranteed constraints:_  
    `2 ≤ inputArray.length ≤ 10^4`,  
    `-10^5  ≤ inputArray[i] ≤ 10^5`.
    
-   **[input] integer l**
    
    Left index of the part to be removed (`0`-based).
    
    _Guaranteed constraints:_  
    `0 ≤ l ≤ r`.
    
-   **[input] integer r**
    
    Right index of the part to be removed (`0`-based).
    
    _Guaranteed constraints:_  
    `l ≤ r < inputArray.length`.
    
-   **[output] array.integer**