
Given an encoded string, return its corresponding decoded string.

The encoding rule is:  `k[encoded_string]`, where the  `encoded_string`  inside the square brackets is repeated exactly  `k`  times. Note:  `k`  is guaranteed to be a positive integer.

_Note that your solution should have linear complexity because this is what you will be asked during an interview._

Example

-   For  `s = "4[ab]"`, the output should be  
    `decodeString(s) = "abababab"`;
    
-   For  `s = "2[b3[a]]"`, the output should be  
    `decodeString(s) = "baaabaaa"`;
    
-   For  `s = "z1[y]zzz2[abc]"`, the output should be  
    `decodeString(s) = "zyzzzabcabc"`.
    

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] string s**
    
    A string encoded as described above. It is guaranteed that:
    
    -   the string consists only of digits, square brackets and lowercase English letters;
    -   the square brackets form a  regular bracket sequence;
    -   all digits that appear in the string represent the number of times the content in the brackets that follow them repeats, i.e.  `k`  in the description above;
    -   there are at most  `20`  pairs of square brackets in the given string.
    
    _Guaranteed constraints:_  
    `0 ≤ s.length ≤ 80`.
    
-   **[output] string**