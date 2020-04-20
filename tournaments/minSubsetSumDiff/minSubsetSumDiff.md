
You have an array of integers  `a`. Split  `a`  into two arrays  `b`  and  `c`  and calculate  `|sum(b) - sum(c)|`, where  `sum(x)`  is the sum of all elements in array  `x`  and  `|y|`  is the absolute value of number  `y`.

Find and return the minimum possible value of  `|sum(b) - sum(c)|`  after splitting  `a`  into  `b`  and  `c`.

Example

For  `a = [2, 7, 10, 5, 3]`, the output should be  
`minSubsetSumDiff(a) = 1`.

You can split  `a`  into  `b`  and  `c`  in the following way:  `b = [2, 5, 7]`  and  `c = [3, 10]`.  `sum(b) = 2 + 5 + 7 = 14`  and  `sum(c) = 10 + 3 = 13`, which gives us  `|14 - 13| = 1`. It's impossible to get a smaller result since  `sum(a)`  is odd, and it's impossible to split  `a`  into two arrays with the same sum of elements.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer a**
    
    An array of integers.
    
    _Guaranteed constraints:_  
    `0 ≤ a[i]` ,  
    `1 ≤ sum(a) · a.length ≤ 2 · 106` .
    
-   **[output] integer**
    
    -   The minimum possible value of  `|sum(b) - sum(c)|`  after splitting array  `a`  into arrays  `b`  and  `c`.