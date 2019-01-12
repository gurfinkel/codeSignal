
Given the  adjacency matrix  of the  _connected undirected_  graph with  _no loops or multiple edges_  and the index of the start vertex, find the distances between the start vertex and each vertex of the graph.

**Example**

For

    matrix = [[false, false, true], 
		      [false, false, true], 
		      [true, true, false]] 

and  `startVertex = 0`, the output should be  
`bfsDistancesUnweightedGraph(matrix, startVertex) = [0, 2, 1]`.

Here's what the given graph looks like:

![](https://codefightsuserpics.s3.amazonaws.com/tasks/bfsDistancesUnweightedGraph/img/example.png?_tm=1530791205968)

Input/Output

-   **[execution time limit] 4 seconds (py3)**
    
-   **[input] array.array.boolean matrix**
    
    _Adjacency matrix_  of the given graph.
    
    _Guaranteed constraints:_  
    `3 ≤ matrix.length ≤ 10`,  
    `matrix[i].length = matrix.length`.
    
-   **[input] integer startVertex**
    
    _Guaranteed constraints:_  
    `0 ≤ startVertex ≤ matrix.length - 1`.
    
-   **[output] array.integer**
    
    -   An array of distances between the start vertex and each vertex of the graph.