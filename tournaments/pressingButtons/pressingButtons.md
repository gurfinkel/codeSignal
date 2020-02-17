
Given a string of digits, return all of the possible non-empty letter combinations that the number could represent. The mapping of digits to letters is the same as you would find on a telephone's buttons, as in the example below:

![](https://codesignal.s3.amazonaws.com/tasks/pressingButtons/img/keypad.jpg?_tm=1551538609573)

The resulting array should be sorted  lexicographically.

Example

For  `buttons = "42"`, the output should be  
`pressingButtons(buttons) = ["ga", "gb", "gc", "ha", "hb", "hc", "ia", "ib", "ic"]`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] string buttons**
    
    A string composed of digits ranging from  `'2'`  to  `'9'`.
    
    _Guaranteed constraints:_  
    `0 ≤ buttons.length ≤ 7`.
    
-   **[output] array.string**
