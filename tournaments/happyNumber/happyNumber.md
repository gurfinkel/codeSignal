
A  _happy number_  is a number defined by the following process: Start with any positive integer and replace the number with the sum of the squares of its digits. Repeat this process until the number equals  `1`, at which point it will stay  `1`, or it loops endlessly in a cycle that does not include  `1`. A number for which this process ends in  `1`  is  _happy_.

Write an algorithm to determine whether or not a number is  _happy_.

Example

For  `n = 19`, the output should be  
`happyNumber(n) = true`.

Following the process outlined above:  
* 12  + 92  = 82;  
* 82  + 22  = 68;  
* 62  + 82  = 100;  
* 12  + 02  + 02  = 1.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer n**
    
    _Guaranteed constraints:_  
    `1 ≤ n ≤ 231  - 1`.
    
-   **[output] boolean**
    
    -   Return  `true`  if the number is  _happy_, otherwise return  `false`.