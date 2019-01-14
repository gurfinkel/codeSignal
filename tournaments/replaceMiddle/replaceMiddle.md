
We define the  _middle_  of the array  `arr`  as follows:

-   if  `arr`  contains an odd number of elements, its  _middle_  is the element whose index number is the same when counting from the beginning of the array and from its end;
-   if  `arr`  contains an even number of elements, its  _middle_  is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.

Given array  `arr`, your task is to find its  _middle_, and, if it consists of two elements, replace those elements with the value of  _middle_. Return the resulting array as the answer.

**Example**

-   For  `arr = [7, 2, 2, 5, 10, 7]`, the output should be  
    `replaceMiddle(arr) = [7, 2, 7, 10, 7]`.
    
    The  _middle_  consists of two elements,  `2`  and  `5`. These two elements should be replaced with their sum, i.e.  `7`.
    
-   For  `arr = [-5, -5, 10]`, the output should be  
    `replaceMiddle(arr) = [-5, -5, 10]`.
    
    The  _middle_  is defined as a single element  `-5`, so the initial array with no changes should be returned.
    

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer arr**
    
    The given array.
    
    _Guaranteed constraints:_  
    `2 ≤ arr.length ≤ 104`,  
    `-103  ≤ arr[i] ≤ 103`.
    
-   **[output] array.integer**
    
    -   `arr`  with its  _middle_  replaced by a single element, or the initial array if the  _middle_consisted of a single element to begin with.