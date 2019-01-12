
Given an undirected graph and some vertex index, find the size of the  connected component  of that vertex.

Example

For

    matrix = [[false, true, false], 
			  [true, false, false], 
			  [false, false, false]] 

and  `vertex = 0`, the output should be  
`dfsComponentSize(matrix, vertex) = 2`.  
![](https://codefightsuserpics.s3.amazonaws.com/tasks/dfsComponentSize/img/ex.png?_tm=1530798750984)

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.array.boolean matrix**
    
    Adjacency matrix  of the undirected graph with no loops or multiple edges.
    
    _Guaranteed constraints:_  
    `3 ≤ matrix.length ≤ 10`,  
    `matrix[i].length = matrix.length`.
    
-   **[input] integer vertex**
    
    `0`-based index of some vertex of the given graph.
    
    _Guaranteed constraints:_  
    `0 ≤ vertex < matrix.length`.
    
-   **[output] integer**