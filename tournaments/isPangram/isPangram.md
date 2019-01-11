
Given a sentence, check whether it is a  pangram  or not.

Example

-   For  `sentence = "The quick brown fox jumps over the lazy dog."`, the output should be  
    `isPangram(sentence) = true`;
-   For  `sentence = "abcdefghijklmnopqrstuvwxya"`, the output should be  
    `isPangram(sentence) = false`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] string sentence**
    
    A string containing characters with their ASCII-codes in the range  `[32, 126]`.
    
    _Guaranteed constraints:_  
    `1 ≤ sentence.length ≤ 100`.
    
-   **[output] boolean**
    
    -   `true`  if  `sentence`  is a pangram,  `false`otherwise.