
Caesar Box is a simple transposition cipher used in the Roman Empire, in which characters of the given message are broken into multiple lines that form a square when stacked up and then read the square column by column.

Given a message, encode it.

Example

For  `inputString = "a message"`, the output should be  
`caesarBoxCipherEncoding(inputString) = "aea sgmse"`.

The square will look as follows:

    a m 
    ess 
    age 

Thus, the encoded message will be  `aea sgmse`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] string inputString**
    
    A string of length  `n2`  for some integer  `n`.
    
    _Guaranteed constraints:_  
    `1 ≤ inputString.length ≤ 16`.
    
-   **[output] string**