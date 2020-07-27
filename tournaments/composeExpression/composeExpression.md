
Given a string that contains only  `digits`  `0-9`  and a  `target`  value, return all expressions that are created by adding some binary operators (`+`,  `-`, or  `*`) between the digits so they evaluate to the target value. In some cases there may not be any binary operators that will create valid expressions, in which case the function should return an empty array. The numbers in the new expressions should not contain leading zeros.

The function should return all valid expressions that evaluate to  `target`, sorted  lexicographically.

Example

For  `digits = "123"`  and  `target = 6`, the output should be  
`composeExpression(digits, target) = ["1*2*3", "1+2+3"]`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] string digits**
    
    _Guaranteed constraints:_  
    `2 ≤ digits.length ≤ 10`.
    
-   **[input] integer target**
    
    _Guaranteed constraints:_  
    `-10^4  ≤ target ≤ 10^4`.
    
-   **[output] array.string**
