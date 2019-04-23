
You have an array  `a`  of different integers which you want to sort. However, you are not interested in the sorted array itself, but in the positions the elements in it used to have in  `a`. Thus your task is to return an array of  `indices`  the elements in the sorted array  `a`used to have before sorting.

Example

-   For  `a = [7, 4, 1]`, the output should be  
    `sortedIndices(a) = [2, 1, 0]`.
    
    Sorted  `a`  would be  `[1, 4, 7]`, which is  [a[2], a[1], a[0]] = [a<sub>[indices[0]]</sub>, a<sub>[indices[1]]</sub>, a<sub>[indices[2]]</sub>]). So, the answer is  `indices = [2, 1, 0]`.
    
-   For  `a = [1, 2, 3, 5, 8]`, the output should be  
    `sortedIndices(a) = [0, 1, 2, 3, 4]`;
    
-   For  `a = [5, 3, 4, 1, 2]`, the output should be  
    `sortedIndices(a) = [3, 4, 1, 2, 0]`.
    

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] array.integer a**
    
    An array of different integers.
    
    _Guaranteed constraints:_  
    `3 ≤ a.length ≤ 10`,  
    `-15 ≤ a[i] ≤ 15`.
    
-   **[output] array.integer**
    
    -   An array  `indices`  such that  `aindices[0]`  is the smallest element of  `a`,  `aindices[1]`  is the second smallest, and so on.