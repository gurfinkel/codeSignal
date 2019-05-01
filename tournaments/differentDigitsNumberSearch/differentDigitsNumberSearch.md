
Given an array of integers, find the leftmost number that has a decimal representation which doesn't contain any digit more than once. If there is no such number, return  `-1`instead.

Example

-   For  `inputArray = [22, 111, 101, 124, 33, 30]`, the output should be  
    `differentDigitsNumberSearch(inputArray) = 124`;
-   For  `inputArray = [1111, 404]`, the output should be  
    `differentDigitsNumberSearch(inputArray) = -1`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer inputArray**
    
    Array of  _positive_  integers.
    
    _Guaranteed constraints:_  
    `2 ≤ inputArray.length ≤ 10`,  
    `10 ≤ inputArray[i] ≤ 104`.
    
-   **[output] integer**