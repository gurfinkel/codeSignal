
Programmer John was studying Lisp programming language, when he suddenly realized that he still does not have a calculator written by himself. Every respected programmer should have one! That is why he decided to write a classic calculator that accepts expressions in  Polish notation.

Example

-   For  `tokens = ["+", "3", "7"]`, the output should be  
    `polishNotation(tokens) = 10`;
-   For  `tokens = ["*", "-", "5", "6", "7"]`, the output should be  
    `polishNotation(tokens) = -7`;
-   For  `tokens = ["-", "5", "*", "6", "7"]`, the output should be  
    `polishNotation(tokens) = -37`.

_Examples in conventional notation_

1.  `3 + 7 = 10`;
2.  `(5 - 6) * 7 = -7`;
3.  `5 - (6 * 7) = -37`.

Input/Output

-   **[execution time limit] 4 seconds (py3)**
    
-   **[input] array.string tokens**
    
    Tokens of some expression in  _Polish notation_. The tokens can be:
    
    -   `'+'`  - addition;
    -   `'*'`  - multiplication;
    -   `'-'`  - subtraction;
    -   `'n'`  - integer number.
    
    It is guaranteed that the array is not empty and that the given expression is valid.
    
    _Guaranteed constraints:_  
    `3 ≤ tokens.length ≤ 15`.
    
-   **[output] integer**
    
    -   Result of the expression given in  _Polish notation_.