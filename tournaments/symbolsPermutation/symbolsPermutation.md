
Determine if it is possible to rearrange the characters in a string to obtain another string.

Example

-   For  `word1 = "abc"`  and  `word2 = "cab"`, the output should be  
    `symbolsPermutation(word1, word2) = true`;
-   For  `word1 = "aaaa"`  and  `word2 = "aaa"`, the output should be  
    `symbolsPermutation(word1, word2) = false`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] string word1**
    
    String of lowercase English letters.
    
    _Guaranteed constraints:_  
    `3 ≤ word1.length ≤ 10`.
    
-   **[input] string word2**
    
    String of lowercase English letters.
    
    _Guaranteed constraints:_  
    `3 ≤ word2.length ≤ 10`.
    
-   **[output] boolean**
    
    -   `true`  if it is possible to rearrange the characters in  `word1`  to obtain  `word2`,  `false`otherwise.