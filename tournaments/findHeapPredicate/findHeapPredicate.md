
Binary heaps  are commonly implemented with an array.

Let  `n`  be the number of elements in the heap. The heap nodes have indices from  `0`  to  `n - 1`, the root has index  `0`. For every valid  `i`  the following is true:

-   if  `2i + 1 < n`  then the left son of the  `ith`  node has an index  `2i + 1`. Otherwise it doesn't exist.
-   if  `2i + 2 < n`  then the right son of the  `ith`  node has an index  `2i + 2`. Otherwise it doesn't exist.
-   if the  `ith`  node has a parent, its index is  `floor((i - 1) / 2)`.

Given an array representing a heap, return a predicate defined for it.

Example

-   For  `heap = [1, 3, 2, 5, 3, 2]`, the output should be  
    `findHeapPredicate(heap) = "<="`.
    
    ![](https://codefightsuserpics.s3.amazonaws.com/tasks/findHeapPredicate/img/example1.png?_tm=1530798900778)
    
-   For  `heap = [1, 3, 2, 5, 3, 1]`, the output should be  
    `findHeapPredicate(heap) = "!"`.
    
    ![](https://codefightsuserpics.s3.amazonaws.com/tasks/findHeapPredicate/img/example2.png?_tm=1530798901143)
    

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer heap**
    
    A non-empty array of integers.
    
    _Guaranteed constraints:_  
    `1 ≤ heap.length ≤ 10`,  
    `-250 ≤ heap[i] ≤ 250`.
    
-   **[output] string**
    
    -   -   If each node is  `≥`  each of its children, return  `">="`;
    
    -   If each node is  `≤`  each of its children, return  `"<="`;
    -   If both predicates are correct for the given heap, return  `"?"`;
    -   If array  `heap`  doesn't represent a correct heap, return  `"!"`.