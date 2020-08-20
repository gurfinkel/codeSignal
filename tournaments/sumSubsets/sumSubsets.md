
Given a sorted array of integers  `arr`  and an integer  `num`, find all possible unique subsets of  `arr`  that add up to  `num`. Both the array of subsets and the subsets themselves should be sorted in  lexicographical order.

Example

For  `arr = [1, 2, 3, 4, 5]`  and  `num = 5`, the output should be  
`sumSubsets(arr, num) = [[1, 4], [2, 3], [5]]`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer arr**
    
    A sorted array of integers.
    
    _Guaranteed constraints:_  
    `0 ≤ arr.length ≤ 50`,  
    `1 ≤ arr[i] ≤ num`.
    
-   **[input] integer num**
    
    A non-negative integer.
    
    _Guaranteed constraints:_  
    `0 ≤ num ≤ 1000`.
    
-   **[output] array.array.integer**
    
    -   A sorted array containing sorted subsets composed of elements from  `arr`  that have a sum of  `num`. It is guaranteed that there are no more than  `1000`  subsets in the answer.