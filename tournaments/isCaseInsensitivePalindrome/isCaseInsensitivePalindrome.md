
Given a string, check if it can become a  palindromethrough a case change of some (possibly, none) letters.

Example

-   For  `inputString = "AaBaa"`, the output should be  
    `isCaseInsensitivePalindrome(inputString) = true`.
    
    `"aabaa"`  is a palindrome as well as  `"AABAA"`,  `"aaBaa"`, etc.
    
-   For  `inputString = "abac"`, the output should be  
    `isCaseInsensitivePalindrome(inputString) = false`.
    
    All the strings which can be obtained via changing case of some group of letters, i.e.  `"abac"`,  `"Abac"`,  `"aBAc"`  and 13 more, are not palindromes.
    

Input/Output

-   **[execution time limit] 4 seconds (py)**
    
-   **[input] string inputString**
    
    Non-empty string consisting of English letters.
    
    _Guaranteed constraints:_  
    `4 ≤ inputString.length ≤ 10`.
    
-   **[output] boolean**