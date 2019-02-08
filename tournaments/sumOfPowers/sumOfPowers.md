
For each integer from  `1`  to  `n`  find the maximal power  `p`  of the given  `divisor`  such that  `divisorp`  divides the current number. The algorithm should return the sum of those powers.

Example

For  `n = 6`  and  `divisor = 2`, the output should be
`sumOfPowers(n, divisor) = 4`.

Explanation:  `0 + 1 + 0 + 2 + 0 + 1 = 4`.

Input/Output

-   **[execution time limit] 4 seconds (py3)**

-   **[input] integer n**

    _Guaranteed constraints:_
    `1 ≤ n ≤ 1000`.

-   **[input] integer divisor**

    _Guaranteed constraints:_
    `2 ≤ divisor ≤ 1000`.

-   **[output] integer**