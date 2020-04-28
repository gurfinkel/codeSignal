
Given a string  `s`, determine if it is a  subsequence  of a given string  `t`.

Example

-   For  `t = "CodeSignal"`  and  `s = "CoSi"`, the output should be  
    `isSubsequence(t, s) = true`;
    
-   For  `t = "CodeSignal"`  and  `s = "cosi"`, the output should be  
    the output should be  
    `isSubsequence(t, s) = false`.
    

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] string t**
    
    A string consisting of English letters, whitespace characters (`' '`), digits and punctuation marks (`".,?!=*+-"`).
    
    _Guaranteed constraints:_  
    `0 ≤ t.length ≤ 500`.
    
-   **[input] string s**
    
    A string consisting of English letters, whitespace characters (`' '`), digits and punctuation marks (`".,?!=*+-"`).
    
    _Guaranteed constraints:_  
    `0 ≤ s.length ≤ 50`.
    
-   **[output] boolean**
    
    -   `true`  if the  `s`  is a  _subsequence_  of  `t`,  `false`  otherwise.