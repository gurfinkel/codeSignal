
Given two strings, check whether it is possible to rearrange characters of the first string in such way that it will become equal to the second one.

Example

-   For  `string1 = "abcd"`  and  `string2 = "cbad"`, the output should be  
    `charactersRearrangement(string1, string2) = true`;
-   For  `string1 = "a"`  and  `string2 = "b"`, the output should be  
    `charactersRearrangement(string1, string2) = false`.

Input/Output

-   **[execution time limit] 3 seconds (java)**
    
-   **[input] string string1**
    
    A string consisting of lowercase English letters.
    
    _Guaranteed constraints:_  
    `1 ≤ string1.length ≤ 105`.
    
-   **[input] string string2**
    
    A string consisting of lowercase English letters.
    
    _Guaranteed constraints:_  
    `1 ≤ string2.length ≤ 105`.
    
-   **[output] boolean**
    
    -   `true`  if the desired rearrangement is possible,  `false`  otherwise.