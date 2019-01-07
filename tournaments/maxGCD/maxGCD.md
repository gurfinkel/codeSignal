
For a given set of positive integers remove one of them to maximize the  greatest common divisor(GCD) of the remaining integers. Return the maximized GCD.

Example

For  `sequence = [8, 60, 12, 3]`, the output should be  
`maxGCD(sequence) = 4`.

The best option is to remove the element  `3`, so that  `gcd([8, 60, 12]) = 4`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer sequence**
    
    _Guaranteed constraints:_  
    `2 ≤ sequence.length ≤ 5`,  
    `2 ≤ sequence[i] ≤ 60`.
    
-   **[output] integer**