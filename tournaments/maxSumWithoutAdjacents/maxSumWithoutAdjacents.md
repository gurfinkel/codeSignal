
You have an array of integers  `a`. Find and return the maximum possible sum of values in some  subsequence  `b`  with the following property: There is no pair of elements in  `b`  for which their indices in  `a`  are adjacent.

**Example**

For  `a = [6, 13, 100, 100, 4]`, the output should be  
`maxSumWithoutAdjacents(a) = 113`.

The subsequence with the maximum possible sum of values is  `{a1, a3} = {13, 100}`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer a**
    
    _Guaranteed constraints:_  
    `1 ≤ a.length ≤ 2 · 10^5`,  
    `0 ≤ a[i] ≤ 10^4`.
    
-   **[output] integer**
    
    -   The maximum possible sum, determined as described above.