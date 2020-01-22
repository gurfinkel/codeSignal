
Given a column title as it would appear in an Excel spreadsheet, return its corresponding column number. Column names and numbers follow a consistent pattern:

```
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28

```

Example

For  `s = "AB"`, the output should be  
`excelSheetColumnNumber(s) = 28`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] string s**
    
    A string of uppercase English letters.
    
    _Guaranteed constraints:_  
    `1 ≤ s.length ≤ 6`.
    
-   **[output] integer**
