
Find the  _longest  subsequence  palindrome_  in a given array  `a`. The  _longest subsequence palindrome_  of array  `a`  is a subsequence of indices  `i1  < i2  < ... < ik`, where  `ai1ai2...aik`  is a palindrome.

Example

-   For  `a = [1, 2, 4, 1]`, the output should be  
    `longestSubsequencePalindrome(a) = 3`.
    
    The  _longest subsequence palindrome_  here is either  `1, 2, 1`  or  `1, 4, 1`, both of which have a length of  `3`.
    
-   For  `a = [1, 2, 3]`, the output should be  
    `longestSubsequencePalindrome(a) = 1`.
    

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer a**
    
    _Guaranteed constraints:_  
    `1 ≤ a.length ≤ 10^3`,  
    `1 ≤ a[i] ≤ 10^9`.
    
-   **[output] integer**
    
    -   The length of the  _longest subsequence palindrome_  in  `a`.
