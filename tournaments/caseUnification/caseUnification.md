
Given an initial string, switch case of the minimal possible number of letters to make the whole string written in the upper case or in the lower case.

Example

-   For  `inputString = "Aba"`, the output should be  
    `caseUnification(inputString) = "aba"`;
-   For  `inputString = "ABa"`, the output should be  
    `caseUnification(inputString) = "ABA"`.

Input/Output

-   **[execution time limit] 4 seconds (py3)**
    
-   **[input] string inputString**
    
    String of odd length consisting of letters.
    
    _Guaranteed constraints:_  
    `3 ≤ inputString.length ≤ 9`.
    
-   **[output] string**
    
    -   The resulting string.