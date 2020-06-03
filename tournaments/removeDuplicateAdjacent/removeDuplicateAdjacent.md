
Given a string  `s`,  **recursively**  remove any adjacent duplicate characters that it contains.

Example

-   For  `s = "cooodefightssforrrcodee"`, the output should be  
    `removeDuplicateAdjacent(s) = "cdefightfocod"`;
-   For  `s = "acaaabbbacdddd"`, the output should be  
    `removeDuplicateAdjacent(s) = "acac"`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] string s**
    
    A string composed of lowercase English letters.
    
    _Guaranteed constraints:_  
    `1 ≤ s.length ≤ 50`.
    
-   **[output] string**
    
    -   A string obtained by removing all adjacent duplicates from the input string.