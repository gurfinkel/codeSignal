
Spreadsheet software uses a consistent naming pattern for columns, in which the first column is named  `A`, the second column is named  `B`, the 27th column is named  `AA`, the 28th is named  `AB`, and so on.  
Given a positive integer  `number`, return the corresponding column title as it would appear in a spreadsheet.

Example

-   For  `number = 27`, the output should be  
    `columnTitle(number) = "AA"`;
-   For  `number = 2`, the output should be  
    `columnTitle(number) = "B"`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] integer number**
    
    A positive integer.
    
    _Guaranteed constraints:_  
    `1 ≤ number ≤ 2147483647`.
    
-   **[output] string**
    
    -   The column title that corresponds to  `number`.
