
We define the  _middle_  of the array  `arr`  as follows:

-   if  `arr`  contains an odd number of elements, its  _middle_  is the element whose index number is the same when counting from the beginning of the array and from its end;
-   if  `arr`  contains an even number of elements, its  _middle_  is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.

An array is called  _smooth_  if its first and its last elements are equal to one another and to the  _middle_. Given an array  `arr`, determine if it is  _smooth_  or not.

**Example**

-   For  `arr = [7, 2, 2, 5, 10, 7]`, the output should be  
    `isSmooth(arr) = true`.
    
    The first and the last elements of  `arr`  are equal to  `7`, and its  _middle_  also equals  `2 + 5 = 7`. Thus, the array is  _smooth_  and the output is  `true`.
    
-   For  `arr = [-5, -5, 10]`, the output should be  
    `isSmooth(arr) = false`.
    
    The first and  _middle_  elements are equal to  `-5`, but the last element equals  `10`. Thus,  `arr`  is not  _smooth_  and the output is  `false`.
    

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer arr**
    
    The given array.
    
    _Guaranteed constraints:_  
    `2 ≤ arr.length ≤ 105`,  
    `-109  ≤ arr[i] ≤ 109`.
    
-   **[output] boolean**
    
    -   `true`  if  `arr`  is  _smooth_,  `false`  otherwise.