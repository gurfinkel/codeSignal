
Given a string, check if a  palindrome  can be obtained from it by at most one swap of some pair of characters.

Example

-   For  `inputString = "aabaa"`, the output should be  
    `isOneSwapEnough(inputString) = true`.
    
    It is already a palindrome.
    
-   For  `inputString = "abab"`, the output should be  
    `isOneSwapEnough(inputString) = true`.
    
    For example, one can swap the leftmost  `'a'`  with the leftmost  `'b'`.
    
-   For  `inputString = "abc"`, the output should be  
    `isOneSwapEnough(inputString) = false`.
    

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] string inputString**
    
    A non-empty string consisting of lowercase English characters.
    
    _Guaranteed constraints:_  
    `1 ≤ inputString.length ≤ 10`.
    
-   **[output] boolean**