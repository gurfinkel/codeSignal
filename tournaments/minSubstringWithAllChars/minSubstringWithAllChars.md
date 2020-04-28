
You have two strings,  `s`  and  `t`. The string  `t`  contains only unique elements. Find and return the minimum consecutive substring of  `s`  that contains all of the elements from  `t`.

It's guaranteed that the answer exists. If there are several answers, return the one which starts from the smallest index.

Example

For  `s = "adobecodebanc"`  and  `t = "abc"`, the output should be  
`minSubstringWithAllChars(s, t) = "banc"`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] string s**
    
    A string consisting only of lowercase English letters.
    
    _Guaranteed constraints:_  
    `0 ≤ s.length ≤ 100`.
    
-   **[input] string t**
    
    A string consisting only of unique lowercase English letters.
    
    _Guaranteed constraints:_  
    `0 ≤ t.length ≤ min(26, s.length)`.
    
-   **[output] string**