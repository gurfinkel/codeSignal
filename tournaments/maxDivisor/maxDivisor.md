
Given a number and a range, find the largest integer within the given range that's divisible by the given number.

Example

For  `left = 1`,  `right = 10`, and  `divisor = 3`, the output should be  
`maxDivisor(left, right, divisor) = 9`.

The largest integer divisible by  `3`  in range  `[1, 10]`  is  `9`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer left**
    
    The left bound of the given range.
    
    _Guaranteed constraints:_  
    `-100 ≤ left ≤ right`.
    
-   **[input] integer right**
    
    The right bound of the given range.
    
    _Guaranteed constraints:_  
    `left ≤ right ≤ 100`.
    
-   **[input] integer divisor**
    
    _Guaranteed constraints:_  
    `2 ≤ divisor ≤ 10`.
    
-   **[output] integer**
    
    -   Maximal integer in the range  `[left, right]`  which is divisible by  `divisor`  or  `-1`  if there in no such number.