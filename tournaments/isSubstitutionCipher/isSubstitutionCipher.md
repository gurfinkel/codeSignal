
A  _ciphertext alphabet_  is obtained from the  plaintext alphabet  by means of rearranging some characters. For example  `"bacdef...xyz"`  will be a simple ciphertext alphabet where  `a`  and  `b`  are rearranged.

A  _substitution cipher_  is a method of encoding where each letter of the  _plaintext alphabet_  is replaced with the corresponding (i.e. having the same index) letter of some  _ciphertext alphabet_.

Given two strings, check whether it is possible to obtain them from each other using some (possibly, different)  _substitution ciphers_.

Example

-   For  `string1 = "aacb"`  and  `string2 = "aabc"`, the output should be  
    `isSubstitutionCipher(string1, string2) = true`.
    
    Any  _ciphertext alphabet_  that starts with  `acb...`  would make this transformation possible.
    
-   For  `string1 = "aa"`  and  `string2 = "bc"`, the output should be  
    `isSubstitutionCipher(string1, string2) = false`.
    

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] string string1**
    
    A string consisting of lowercase English characters.
    
    _Guaranteed constraints:_  
    `1 ≤ string1.length ≤ 10`.
    
-   **[input] string string2**
    
    A string consisting of lowercase English characters of the same length as  `string1`.
    
    _Guaranteed constraints:_  
    `string2.length = string1.length`.
    
-   **[output] boolean**