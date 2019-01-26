
Let's call a string  _cool_  if it is formed only by English letters and no two lowercase and no two uppercase letters are in adjacent positions. Given a string, check if it is  _cool_.

Example

-   For  `inputString = "aQwFdA"`, the output should be  
    `coolString(inputString) = true`;
-   For  `inputString = "aAA"`, the output should be  
    `coolString(inputString) = false`;
-   For  `inputString = "q q"`, the output should be  
    `coolString(inputString) = false`.

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] string inputString**
    
    _Guaranteed constraints:_  
    `1 ≤ inputString.length ≤ 10`.
    
-   **[output] boolean**
    
    -   `true`  if  `inputString`  is  _cool_,  `false`  otherwise.