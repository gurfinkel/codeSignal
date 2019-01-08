
Calculating the squares of numbers made up of two identical digits has been much less interesting ever since you memorized them all back in grade school. Feeling nostalgic one day in college, you are now playing around by finding the values of  `(p0...0p)2`. Here, two occurrences of the same digit  `p`  are delimited by  `n`  zeros.

You soon realize that the answers are often quite large, so you definitely won't have enough paper available on which to jot them down. To save paper (and trees!), instead of finding the squared numbers, you decide to calculate the sum of digits in each of them.

Given  `n`  and  `p`, find the sum of digits of  `(p0...0p)2`.

Example

-   For  `p = 5`  and  `n = 1`, the output should be  
    `exerciseElaboration(p, n) = 19`.
    
    `5052  = 255025`
    
-   For  `p = 9`  and  `n = 0`, the output should be  
    `exerciseElaboration(p, n) = 18`.
    
    `992  = 9801`
    
-   For  `p = 1`  and  `n = 2`, the output should be  
    `exerciseElaboration(p, n) = 4`.
    
    `10012  = 1002001`
    

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] integer p**
    
    _Guaranteed constraints:_  
    `1 ≤ p ≤ 9`.
    
-   **[input] integer n**
    
    _Guaranteed constraints:_  
    `0 ≤ n ≤ 105`.
    
-   **[output] integer**
    
    -   The sum of the digits of  `(p0...0p)2`.