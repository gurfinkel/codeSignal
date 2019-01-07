
Given the  adjacency matrix  of the  _connected undirected_  graph with  _no loops or multiple edges_, find the distance between the two specified vertices.

Example

For

`vertex1 = 0`, and  `vertex2 = 1`, the output should be  
`bfsDistancesUnweightedGraph2(matrix, vertex1, vertex2) = 2`.

Here's what the given graph looks like:

![](https://codefightsuserpics.s3.amazonaws.com/tasks/bfsDistancesUnweightedGraph2/img/example.png?_tm=1530791207697)

Input/Output

-   **[execution time limit] 3 seconds (java)**
    
-   **[input] array.array.boolean matrix**
    
    _Adjacency matrix_  of the given graph.
    
    _Guaranteed constraints:_  
    `3 ≤ matrix.length ≤ 10`,  
    `matrix[i].length = matrix.length`.
    
-   **[input] integer vertex1**
    
    _Guaranteed constraints:_  
    `0 ≤ vertex1 ≤ matrix.length - 1`.
    
-   **[input] integer vertex2**
    
    _Guaranteed constraints:_  
    `0 ≤ vertex2 ≤ matrix.length - 1`,  
    `vertex2 ≠ vertex1`
    
-   **[output] integer**