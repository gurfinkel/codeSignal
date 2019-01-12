
Given the  adjacency matrix  of an  _undirected_  graph with  _no loops or multiple edges_, find the size of the  connected component  of vertex  `1`  (0-based).

Example

-   For
    
    the output should be  
    `bfsComponentSize(matrix) = 2`.
    
    The component contains vertices  `0`  and  `1`.
    
    ![](https://codefightsuserpics.s3.amazonaws.com/tasks/bfsComponentSize/img/example1.png?_tm=1530791202850)
    
-   For
    
    the output should be  
    `bfsComponentSize(matrix) = 1`.
    
    The component consists of a single vertex  `1`.
    
    ![](https://codefightsuserpics.s3.amazonaws.com/tasks/bfsComponentSize/img/example2.png?_tm=1530791203108)
    

Input/Output

-   **[execution time limit] 4 seconds (py3)**
    
-   **[input] array.array.boolean matrix**
    
    _Adjacency matrix_  of the given graph.
    
    _Guaranteed constraints:_  
    `3 ≤ matrix.length ≤ 10`,  
    `matrix[i].length = matrix.length`.
    
-   **[output] integer**