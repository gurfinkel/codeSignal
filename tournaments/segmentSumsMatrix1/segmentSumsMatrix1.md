
For a given array of integers construct a square matrix  `A`  with side length equal to the length of array where  `A[i, j]`  is equal to the sum of all elements of the  _array_  with indexes between  `i`  and  `j`, inclusive.

Note that  _between  `i`  and  `j`_  means  `a[i] + a[i + 1] + ... + a[j]`  for the case  `i ≤ j`, and  `a[j] + a[j + 1] + ... + a[i]`  for the case  `i > j`.

Example

For  `inputArray = [1, 2, 3]`, the output should be

    segmentSumsMatrix1(inputArray) = [
    [1, 3, 6], 
    [3, 2, 5], 
    [6, 5, 3]] 

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer inputArray**
    
    _Guaranteed constraints:_  
    `2 ≤ inputArray.length ≤ 5`,  
    `1 ≤ inputArray[i] ≤ 10`.
    
-   **[output] array.array.integer**