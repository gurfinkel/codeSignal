
A number is considered  _special_, if it remains the same (and continues being a valid number) when rotated by  `180°`. For example, number  `986`  is  _special_, but  `11`  or  `9`  aren't, because  `1`  ceases to be a digit after the rotation and  `9`  becomes  `6`  after the rotation.

Determine the number of  _special_  integers between  `l`  and  `r`, inclusive.

Example

-   For  `l = 8`  and  `r = 8`, the output should be  
    `specialNumbers(l, r) = 1`;
-   For  `l = 66`  and  `r = 96`, the output should be  
    `specialNumbers(l, r) = 3`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer l**
    
    _Guaranteed constraints:_  
    `1 ≤ l ≤ r`.
    
-   **[input] integer r**
    
    _Guaranteed constraints:_  
    `l ≤ r ≤ 104`.
    
-   **[output] integer**