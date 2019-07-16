
Given an integer  `n`  and an array  `a`  of length  `n`, your task is to apply the following mutation to  `a`:

-   Array  `a`  mutates into a new array  `b`  of length  `n`.
-   For each  `i`  from  `0`  to  `n - 1`,  `b[i] = a[i - 1] + a[i] + a[i + 1]`.
-   If some element in the sum  `a[i - 1] + a[i] + a[i + 1]`  does not exist, it should be set to  `0`. For example,  `b[0]`  should be equal to  `0 + a[0] + a[1]`.

Example

For  `n = 5`  and  `a = [4, 0, 1, -2, 3]`, the output should be  `mutateTheArray(n, a) = [4, 5, -1, 2, 1]`.

-   `b[0] = 0 + a[0] + a[1] = 0 + 4 + 0 = 4`
-   `b[1] = a[0] + a[1] + a[2] = 4 + 0 + 1 = 5`
-   `b[2] = a[1] + a[2] + a[3] = 0 + 1 + (-2) = -1`
-   `b[3] = a[2] + a[3] + a[4] = 1 + (-2) + 3 = 2`
-   `b[4] = a[3] + a[4] + 0 = (-2) + 3 + 0 = 1`

So, the resulting array after the mutation will be  `[4, 5, -1, 2, 1]`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer n**
    
    An integer representing the length of the given array.
    
    _Guaranteed constraints:_  
    `1 ≤ n ≤ 103`.
    
-   **[input] array.integer a**
    
    An array of integers that needs to be mutated.
    
    _Guaranteed constraints:_  
    `a.length = n`,  
    `-103  ≤ a[i] ≤ 103`.
    
-   **[output] array.integer**
    
    -   The resulting array after the mutation.