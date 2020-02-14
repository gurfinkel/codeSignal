
Given two strings,  `s`  and  `t`, find the length of their  _longest common substring_.

Example

-   For  `s = "abcdxyz"`  and  `t = "xyzabcd"`, the output should be  
    `longestCommonSubstring(s, t) = 4`;
    
-   For  `s = "zxabcdezy"`  and  `t = "yzabcdezx"`, the output should be  
    `longestCommonSubstring(s, t) = 6`.
    
    The  _longest common substring_  is  `"abcdez"`  and has a length of  `6`.
    

Input/Output

-   **[execution time limit] 6 seconds (js)**
    
-   **[input] string s**
    
    A non-empty string.
    
    _Guaranteed constraints:_  
    `1 ≤ s.length ≤ 105`.
    
-   **[input] string t**
    
    A non-empty string.
    
    _Guaranteed constraints:_  
    `1 ≤ t.length ≤ 105`.
    
-   **[output] integer**
    
    -   The length of the  _longest common substring_  of  `s`  and  `t`.
