
_Run-length encoding algorithm_  (_RLE_) works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence.

We need an algorithm that applies the  _RLE_  to a given string.

Example

For  `inputString = "abbaaaac"`, the output should be  
`runLengthEncoding(inputString) = "1a2b4a1c"`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] string inputString**
    
    String of lowercase letters.
    
    _Guaranteed constraints:_  
    `5 ≤ inputString.length ≤ 10`.
    
-   **[output] string**