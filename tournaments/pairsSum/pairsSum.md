
_Note: Write a solution with  `O(n^2)`  complexity, since this is what you would be asked to do during a real interview. Can you solve this task without using built-in data structures?_

Given an array of integers  `a`, find the number of pairs of numbers  `a[i]`  and  `a[j]`, where  `i ≠ j`, such that the sum of  `a[i]  + a[j]`is also present in  `a`.

Example

For  `a = [1, 1, 3, 2, 5]`, the output should be  
`pairsSum(a) = 4`.

Here are all of the number pairs:  
*  `1`  pair  `(1, 1)`:  `1 + 1 = 2`  is also present in  `a`;  
*  `2`  pairs  `(1, 2)`:  `1 + 2 = 3`  is present in  `a`  too;  
*  `1`  pair  `(2, 3)`:  `2 + 3 = 5`  is also present in  `a`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer a**
    
    An array of integers.
    
    _Guaranteed constraints:_  
    `1 ≤ a.length ≤ 10^3`,  
    `-10^9  ≤ a[i] ≤ 10^9`.
    
-   **[output] integer**
    
    -   The number of pairs of numbers  `a[i]`  and  `a[j]`  (`i ≠ j`) such that  `a[i]  + a[j]`is also present in  `a`.