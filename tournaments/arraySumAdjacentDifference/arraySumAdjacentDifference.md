
Given array of integers, find the sum of absolute differences of consecutive numbers.

Example

For  `inputArray = [4, 7, 1, 2]`, the output should be  
`arraySumAdjacentDifference(inputArray) = 10`.

-   `|4 - 7| = 3`;
-   `|7 - 1| = 6`;
-   `|1 - 2| = 1`

So, the answer is  `3 + 6 + 1 = 10`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer inputArray**
    
    _Guaranteed constraints:_  
    `3 ≤ inputArray.length ≤ 10`,  
    `1 ≤ inputArray[i] ≤ 15`.
    
-   **[output] integer**
    
    -   Sum of absolute differences of consecutive numbers from  `inputArray`.