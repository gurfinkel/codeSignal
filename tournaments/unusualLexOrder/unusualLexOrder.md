
The citizens of Codeland read each word from right to left, meaning that lexicographical comparison works differently in their language. Namely, string  `a`is  _lexicographically smaller_  than string  `b`  if either:  `a`  is a suffix of  `b`  (in common sense, i.e.  `b`  ends with a substring equal to  `a`); or their last  `k`characters are the same but the  `(k + 1)th`character from the right in string  `a`  is smaller than the same character in string  `b`.

Given an array of words in Codeland language, sort them  _lexicographically_  according to Codeland's unique rules.

Example

For  `words = ["nigeb", "ta", "eht", "gninnigeb"]`, the output should be  
`unusualLexOrder(words) = ["ta", "nigeb", "gninnigeb", "eht"]`.

In particular,  `"ta" < "nigeb"`  because  `'a' < 'b'`and  `"nigeb" < "gninnigeb"`  because the former word is a suffix of the latter.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.string words**
    
    An array of strings consisting of lowercase letters.
    
    _Guaranteed constraints:_  
    `1 ≤ words.length ≤ 30`,  
    `1 ≤ words[i].length ≤ 10`.
    
-   **[output] array.string**
    
    -   The array  `words`  after sorting.