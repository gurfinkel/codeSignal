
_Note: Write a solution with  `O(n)`  complexity, since this is what you would be asked to do during a real interview._

Given an array  `a`  composed of distinct elements, find the next larger element for each element of the array, i.e. the first element to the right that is greater than this element, in the order in which they appear in the array, and return the results as a new array of the same length. If an element does not have a larger element to its right, put  `-1`  in the appropriate cell of the result array.

Example

For  `a = [6, 7, 3, 8]`, the output should be  
`nextLarger(a) = [7, 8, 8, -1]`.

In this array, the next larger element for  `6`  is  `7`, for  `7`  is  `8`, for  `3`  is  `8`  (`7`  is not a valid option since elements from  `a`  can only be compared to elements to their right), and for  `8`  there is no such element, so we put  `-1`  in the last cell.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer a**
    
    An array composed of distinct elements.
    
    _Guaranteed constraints:_  
    `1 ≤ a.length ≤ 104`,  
    `0 ≤ a[i] ≤ 105`.
    
-   **[output] array.integer**
    
    -   The result array, in which the  `ith`  cell corresponds to the first element in  `a`  to the right of  `a[i]`  that is larger than  `a[i]`, or  `-1`  if there is no such element.