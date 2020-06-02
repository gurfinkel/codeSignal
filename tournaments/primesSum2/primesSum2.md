
Given a positive integer  `n`, calculate the sum of all the  prime numbers  from  `1`  to  `n`, inclusive. Because this number may be very big, return it modulo  `10^9  + 7`  in your output.

Example

-   For  `n = 6`, the output should be  
    `primesSum2(n) = 10`.
    
    The sum of the prime numbers from  `1`  to  `6`, inclusive, (`2 + 3 + 5`) is  `10`.
    
-   For  `n = 11`, the output should be  
    `primesSum2(n) = 28`.
    
    The sum of the prime numbers from  `1`  to  `11`, inclusive, (`2 + 3 + 5 + 7 + 11`) is  `28`.
    

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer n**
    
    _Guaranteed constraints:_  
    `1 ≤ n ≤ 10^5`.
    
-   **[output] integer**
    
    -   The sum of all the prime numbers from  `1`  to  `n`, inclusive, modulo  `10^9  + 7`.