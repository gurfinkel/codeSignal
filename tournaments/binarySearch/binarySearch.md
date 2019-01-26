
Binary search is a powerful and interesting way to find an element within a list! It's a lot faster than looking at every single element in the list, but it's only possible if the list is sorted.

Given a sorted array of distinct integers  `inputArray`and an integer  `searchElement`, your task is to find the index of  `searchElement`  in  `inputArray`  or return  `-1`  if there are no occurrences of this element in the array.

Example

-   For  `inputArray = [1, 2, 3, 4]`  and  `searchElement = 3`, the output should be  
    `binarySearch(inputArray, searchElement) = 2`.
    
    `inputArray[2] = 3`, thus the answer is  `2`.
    
-   For  `inputArray = [1, 2, 3, 4]`  and  `searchElement = 5`, the output should be  
    `binarySearch(inputArray, searchElement) = -1`.
    
    Since  `5`  doesn't appear in  `inputArray`, the answer is  `-1`.
    

Input/Output

-   **[execution time limit] 4 seconds (py3)**
    
-   **[input] array.integer inputArray**
    
    A sorted array of disctinct integers.
    
    _Guaranteed constraints:_  
    `1 ≤ inputArray.length ≤ 105`,  
    `-105  ≤ inputArray[i] ≤ 105`.
    
-   **[input] integer searchElement**
    
    _Guaranteed constraints:_  
    `-105  ≤ searchElement ≤ 105`.
    
-   **[output] integer**
    
    -   The index of  `searchElement`  in  `inputArray`  or  `-1`  is there is no such element.