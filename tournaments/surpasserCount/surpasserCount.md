
You have an array of integers  `a`. Let's call  `aj`  a  _surpasser_  of  `ai`  if  `i < j`  and  `ai  < aj`. Calculate the number of  _surpassers_  for each element in  `a`  and return the sum of these numbers modulo  `109  + 7`.

Example

For  `a = [1, 2, 3, 4, 5]`, the output should be  
`surpasserCount(a) = 10`.

For each element in this array, all elements to the right are its  _surpassers_, so the answer is  `4 + 3 + 2 + 1 = 10`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer a**
    
    An array of integers.
    
    _Guaranteed constraints:_  
    `1 ≤ a.length ≤ 5 · 104`,  
    `0 ≤ a[i] ≤ 106`.
    
-   **[output] integer**
    
    -   The sum of  _surpasser_  numbers in the given array, modulo  `109  + 7`.