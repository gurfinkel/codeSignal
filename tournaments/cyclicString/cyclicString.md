
You're given a  substring  `s`  of some  cyclic string. What's the length of the smallest possible string that can be concatenated to itself many times to obtain this cyclic string?

Example

For  `s = "cabca"`, the output should be  
`cyclicString(s) = 3`.

`"cabca"`  is a substring of a cycle string  `"abcabcabcabc..."`  that can be obtained by concatenating  `"abc"`  to itself. Thus, the answer is  `3`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] string s**
    
    _Guaranteed constraints:_  
    `3 ≤ s.length ≤ 15`.
    
-   **[output] integer**