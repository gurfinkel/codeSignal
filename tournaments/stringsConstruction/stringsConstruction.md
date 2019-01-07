
How many strings equal to  `a`  can be constructed using letters from the string  `b`? Each letter can be used only once and in one string only.

Example

For  `a = "abc"`  and  `b = "abccba"`, the output should be  
`stringsConstruction(a, b) = 2`.

We can construct  `2`  strings  `a`  with letters from  `b`.

Input/Output

-   **[execution time limit] 3 seconds (java)**
    
-   **[input] string a**
    
    String to construct,  `a`  contains only lowercase English letters.
    
    _Guaranteed constraints:_  
    `3 ≤ a.length ≤ 10`.
    
-   **[input] string b**
    
    String containing needed letters,  `b`  contains only lowercase English letters.
    
    _Guaranteed constraints:_  
    `3 ≤ b.length ≤ 50`.
    
-   **[output] integer**