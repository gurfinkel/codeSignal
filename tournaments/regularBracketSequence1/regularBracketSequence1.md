
For a string consisting of only  `'('`s and  `')'`s, determine if it is  a regular bracket sequence  or not.

Example

For  `sequence = "()()"`, the output should be  
`regularBracketSequence1(sequence) = true`.

We could insert  `(1 + 2) * (2 + 4)`  which is a valid arithmetic expression, so the answer is  `true`.

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] string sequence**
    
    _Guaranteed constraints:_  
    `4 ≤ sequence.length ≤ 10`.
    
-   **[output] boolean**
    
    -   `true`  if the bracket sequence is  _regular_,  `false`otherwise.