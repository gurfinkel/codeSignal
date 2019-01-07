
Return the value of  Z-function  for a given string.

Example

For  `s = "acacbab"`, the output should be  
`zFunctionNaive(s) = [7, 0, 2, 0, 0, 1, 0]`.

Here's where the non-zero values of  _Z-function_  came from:  
![](https://codefightsuserpics.s3.amazonaws.com/tasks/zFunctionNaive/img/example.png?_tm=1530820980845)

Input/Output

-   **[execution time limit] 3 seconds (java)**
    
-   **[input] string s**
    
    A string of lowercase English letters.
    
    _Guaranteed constraints:_  
    `3 ≤ s.length ≤ 10`.
    
-   **[output] array.integer**
    
    -   The value of  _Z-function_  for  `s`.