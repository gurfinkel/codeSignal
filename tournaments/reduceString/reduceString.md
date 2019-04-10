
You are given a string. Remove its first and last characters until the string is empty or the first and the last characters are not equal. Output the resulting string.

Example

-   For  `inputString = "abacaba"`, the output should be  
    `reduceString(inputString) = ""`.
    
    Explanation:  `"bacab" -> "aca" -> "c" -> ""`.
    
-   For  `inputString = "12133221"`, the output should be  
    `reduceString(inputString) = "1332"`.
    

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] string inputString**
    
    _Guaranteed constraints:_  
    `0 ≤ inputString.length ≤ 10`.
    
-   **[output] string**