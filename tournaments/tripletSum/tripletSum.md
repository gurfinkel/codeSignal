
_Note: Write a solution with  `O(n2)`  time complexity, since this is what you would be asked to do during a real interview._

You have an array  `a`  composed of exactly  `n`  elements. Given a number  `x`, determine whether or not  `a`  contains three elements for which the sum is exactly  `x`.

Example

-   For  `x = 15`  and  `a = [14, 1, 2, 3, 8, 15, 3]`, the output should be  
    `tripletSum(x, a) = false`;

-   For  `x = 8`  and  `a = [1, 1, 2, 5, 3]`, the output should be  
    `tripletSum(x, a) = true`.

    The given array contains the elements  `1`,`2`, and  `5`, which add up to  `8`.


Input/Output

-   **[execution time limit] 4 seconds (js)**

-   **[input] integer x**

    _Guaranteed constraints:_  
    `1 ≤ x ≤ 10^5`.

-   **[input] array.integer a**

    _Guaranteed constraints:_  
    `3 ≤ a.length ≤ 6 · 10^5`,  
    `1 ≤ a[i] ≤ 10^5`.

-   **[output] boolean**

    Return  `true`  if the array contains three elements that add up to  `x`  and  `false`  otherwise.
