
Given an integer  `len`, count the number of different  _good strings_  that have a length of exactly  `len`. A  _good string_  is a string for which the following conditions are true:

-   A good string contains only lowercase English letters.
-   Each character in a good string is unique.
-   Exactly one character in a good string is  lexicographically  greater than the character that precedes it.

Example

-   For  `len = 2`, the output should be  
    `goodStringsCount(len) = 325`.
    
    -   If the first symbol is  `'a'`, there are  `25`  possible  _good strings_:  `"ab"`,  `"ac"`, ...
    -   If the first symbol is  `'b'`, there are  `24`  possible  _good strings_:  `"bc"`,  `"bd"`, ...
    -   ...
    -   If the first symbol is  `'z'`, there are  `0`  possible  _good strings_  because there is no character that is lexicographically greater.
    
    There are  `25 + 24 + 23 + ... + 0 = 325`  _good strings_  that have a length of  `2`.
    
-   For  `len = 1`, the output should be  
    `goodStringsCount(len) = 0`.
    
    The  `3rd`  rule for good strings can't be true if there is only one character in the string.
    

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] integer len**
    
    The length of  _good strings_  that you're looking for.
    
    _Guaranteed constraints:_  
    `1 ≤ len ≤ 9`.
    
-   **[output] integer**
    
    -   The number of different  _good strings_  with a length of exactly  `len`.