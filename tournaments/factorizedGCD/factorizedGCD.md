
Find the  greatest common divisor  of two given integers. Each integer is given in the form of its prime factorization - a sorted array of all prime factors of the number.

Example

For  `a = [2, 3, 3, 3, 5]`  and  `b = [2, 2, 2, 2, 3, 3]`, the output should be  
`factorizedGCD(a, b) = 18`.

`gcd(a, b) = gcd(270, 144)`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer a**
    
    A prime factorization of an integer greater than  `1`.
    
    _Guaranteed constraints:_  
    `1 ≤ a.length ≤ 10`,  
    `2 ≤ a[i] ≤ 97`.
    
-   **[input] array.integer b**
    
    A prime factorization of an integer greater than  `1`.
    
    _Guaranteed constraints:_  
    `1 ≤ b.length ≤ 10`,  
    `2 ≤ b[i] ≤ 97`.
    
-   **[output] integer**