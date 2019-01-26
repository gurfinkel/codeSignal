
Caesar Box is a simple transposition cipher used in the Roman Empire. It is described as the following two-step process:

1.  The characters of the given message are broken into  `n`  lines of equal lengths and stacked up;
2.  The letters from the resulting rectangle are written from top to bottom column by column.

Given a word, count the number of different  `n`  such that the message, obtained by applying encoding two times, is the same as initial message.

Example

For  `message = "abaaba"`, the output should be  
`caesarBoxCipherEncoding2(message) = 2`.

It is possible to apply the encoding algorithm for  `n = 2`  or  `n = 3`.

-   `n = 2`:
    -   The first encoding:  `"abaaba" -> "aabbaa"`;
    aba 
    aba 
    -   The second encoding:  `"aabbaa" -> "abaaba"`.
    aab 
    baa 

-   `n = 3`:
    -   The first encoding:  `"abaaba" -> "aabbaa"`;
    ab 
    aa 
    ba 
    -   The second encoding:  `"aabbaa" -> "abaaba"`.
    aa 
    bb 
    aa 

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] string message**
    
    _Guaranteed constraints:_  
    `4 ≤ message.length ≤ 25`.
    
-   **[output] integer**
    
    -   The number of above-described  `n`s, such that  `1 < n < message.length`.