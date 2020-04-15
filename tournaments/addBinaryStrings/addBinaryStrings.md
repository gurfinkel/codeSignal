
_Avoid using built-in big integers to solve this challenge. Implement them yourself, since this is what you would be asked to do during a real interview._

Given two binary strings  `a`  and  `b`, add them together and return the resulting string.

Example

-   For  `a = "1000"`  and  `b = "111"`, the output should be  
    `addBinaryStrings(a, b) = "1111"`;
-   For  `a = "1"`  and  `b = "1"`, the output should be  
    `addBinaryStrings(a, b) = "10"`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] string a**
    
    A string that can contain only  `0`  and  `1`.
    
    _Guaranteed constraints:_  
    `0 ≤ a.length ≤ 105`.
    
-   **[input] string b**
    
    A string that can contain only  `0`  and  `1`.
    
    _Guaranteed constraints:_  
    `0 ≤ b.length ≤ 105`.
    
-   **[output] string**
    
    -   The result of adding strings  `a`  and  `b`, without any leading zeros.