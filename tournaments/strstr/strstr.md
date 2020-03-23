
_Avoid using built-in functions to solve this challenge. Implement them yourself, since this is what you would be asked to do during a real interview._

Implement a function that takes two strings,  `s`  and  `x`, as arguments and finds the first occurrence of the string  `x`  in  `s`. The function should return an integer indicating the index in  `s`  of the first occurrence of  `x`. If there are no occurrences of  `x`  in  `s`, return  `-1`.

Example

-   For  `s = "CodefightsIsAwesome"`  and  `x = "IA"`, the output should be  
    `strstr(s, x) = -1`;
-   For  `s = "CodefightsIsAwesome"`  and  `x = "IsA"`, the output should be  
    `strstr(s, x) = 10`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] string s**
    
    A string containing only uppercase or lowercase English letters.
    
    _Guaranteed constraints:_  
    `1 ≤ s.length ≤ 106`.
    
-   **[input] string x**
    
    String, containing only uppercase or lowercase English letters.
    
    _Guaranteed constraints:_  
    `1 ≤ x.length ≤ 106`.
    
-   **[output] integer**
    
    -   An integer indicating the index of the first occurrence of the string  `x`  in  `s`, or  `-1`  if  `s`  does not contain  `x`.