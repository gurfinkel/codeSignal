
Given a string with at least one digit, extract the rightmost digit from it.

Example

-   For  `inputString = "var_1__Int"`, the output should be  
    `lastDigitRegExp(inputString) = '1'`;
-   For  `inputString = "qq2q"`, the output should be  
    `lastDigitRegExp(inputString) = '2'`;
-   For  `inputString = "0ss"`, the output should be  
    `lastDigitRegExp(inputString) = '0'`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] string inputString**
    
    A string with at least one digit.
    
    _Guaranteed constraints:_  
    `3 ≤ inputString.length ≤ 20`.
    
-   **[output] char**
    
    -   The rightmost digit that occurs in the  `inputString`.