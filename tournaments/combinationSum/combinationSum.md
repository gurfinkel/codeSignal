
Given an array of integers  `a`  and an integer  `sum`, find all of the unique combinations in  `a`  that add up to  `sum`.  
The same number from  `a`  can be used an unlimited number of times in a combination.  
Elements in a combination  `(a1  a2  … ak)`  must be sorted in non-descending order, while the combinations themselves must be sorted in ascending order.  
If there are no possible combinations that add up to  `sum`, the output should be the string  `"Empty"`.

Example

For  `a = [2, 3, 5, 9]`  and  `sum = 9`, the output should be  
`combinationSum(a, sum) = "(2 2 2 3)(2 2 5)(3 3 3)(9)"`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer a**
    
    An array of positive integers.
    
    _Guaranteed constraints:_  
    `2 ≤ a.length ≤ 11`,  
    `1 ≤ a[i] ≤ 9`.
    
-   **[input] integer sum**
    
    _Guaranteed constraints:_  
    `1 ≤ sum ≤ 25`.
    
-   **[output] string**
    
    -   All possible combinations that add up to a given  `sum`, or  `"Empty"`  if there are no possible combinations.