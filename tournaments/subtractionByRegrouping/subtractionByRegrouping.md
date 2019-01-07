
When subtracting integers by hand, you can use a strategy called  _regrouping_. (This strategy is also sometimes called  _borrowing_.) In this strategy, corresponding digits are subtracted from each other one by one, from right to left, unless the digit of the  `minuend`  (the number  **being subtracted from**) is smaller than the corresponding digit of the  `subtrahend`  (the number  **being subtracted**). In this case, you have to borrow  `10`  from the digit of the  `minuend`  immediately to the left of the current one. You can see an example of this method at work  [here](https://en.wikipedia.org/wiki/Subtraction#Trade_first).

When you subtract using  _regrouping_, all the numbers that are being subtracted (the  `subtrahend`) remain the same, while the numbers that are being subtracted from (the  `minuend`) may change. Given two integers of the same length, return an array containing the numbers that are  **being subtracted from**  when performing subtraction by hand, from right to left.

Example

For  `minuend = 2024`  and  `subtrahend = 1234`, the output should be  
`subtractionByRegrouping(minuend, subtrahend) = [4, 12, 9, 1]`.

When subtracting  `1234`  from  `2024`, we actually consider the following pairs (going from right to left):

-   `4`  and  `4`;
-   `12`  (`10`  was borrowed from  `0`, temporarily making it equal to  `-1`, and added to  `2`) and  `3`;
-   `9`  (again,  `10`  was borrowed from  `2`) and  `2`;
-   `1`  and  `1`.

Input/Output

-   **[execution time limit] 3 seconds (java)**
    
-   **[input] integer minuend**
    
    The number that the  `subtrahend`  is being subtracted from.
    
    _Guaranteed constraints:_  
    `1 ≤ minuend ≤ 109`.
    
-   **[input] integer subtrahend**
    
    The number being subtracted from the  `minuend`.
    
    _Guaranteed constraints:_  
    `1 ≤ subtrahend ≤ minuend`.
    
    `subtrahend`  is guaranteed to have the same number of digits as  `minuend`.
    
-   **[output] array.integer**
    
    -   An array containing the numbers that are being subtracted from when subtracting the  `subtrahend`  from the  `minuend`  using the  _regrouping strategy_.