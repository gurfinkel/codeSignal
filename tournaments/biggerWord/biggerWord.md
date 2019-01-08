
Given a word  `w`, rearrange the letters of  `w`  to construct another word  `s`  in such a way that  `s`  is  lexicographically greater  than  `w`. In case of multiple possible answers, find  _the lexicographically smallest_one. If there is no answer, return string  `'no answer'`.

Example

-   For  `w = "fbcedba"`, the output should be  
    `biggerWord(w) = "fbdabce"`;
-   For  `w = "zyx"`, the output should be  
    `biggerWord(w) = "no answer"`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] string w**
    
    A string consisting only of lewercase English letters.
    
    _Guaranteed constraints:_  
    `2 ≤ w.length ≤ 1000`.
    
-   **[output] string**