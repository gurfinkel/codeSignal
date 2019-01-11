
A pattern can be represented as a string containing lowercase English letters and special characters: question marks and asterisks. Each question mark should be replaced by exactly one letter, and each asterisk should be replaced by zero or more letters (possibly different).

A string of letters matches a  pattern  if question marks and asterisks in the latter can be replaced by letters in such a way that pattern will become equal to a given string.

Does a given string match a given pattern?

Example

-   For  `input = "abacaba"`  and  `pattern = "?*b?"`, the output should be  
    `patternMatching(input, pattern) = true`;
-   For  `input = "abacaba"`  and  `pattern = "?*ca?"`, the output should be  
    `patternMatching(input, pattern) = false`.

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] string input**
    
    A string of lowercase English letters.
    
    _Guaranteed constraints:_  
    `1 ≤ input.length ≤ 10`.
    
-   **[input] string pattern**
    
    A string of lowercase English letters, question marks and asterisks.
    
    _Guaranteed constraints:_  
    `1 ≤ pattern.length ≤ 10`.
    
-   **[output] boolean**
    
    -   `true`  if  `input`  string matches  `pattern`,  `false`otherwise.