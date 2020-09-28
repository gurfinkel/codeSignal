
You are given an undirected weighted  `graph`, which is represented as an  adjacency matrix. Find the shortest path between a  `start`  node and a  `finish`  node in the  `graph`. You are allowed to add at most one edge of a given  `weight`  between any two nodes that are not directly connected to each other.

**Example**

For  `start = 1`,  `finish = 4`,  `weight = 2`, and

```
   graph = [[0, 2, 0, 4, 0],
            [2, 0, 1, 0, 0], 
            [0, 1, 0, 3, 0], 
            [4, 0, 3, 0, 1], 
            [0, 0, 0, 1, 0]]

```

the output should be  
`shortestPathWithEdge(start, finish, weight, graph) = 3`.

In the original graph, the shortest distance between nodes  `1`  and  `4`  is equal to  `4`. But you can add an edge of weight  `2`  between nodes  `1`  and  `5`, making the resulting distance  `3`.

![](https://codesignal.s3.amazonaws.com/tasks/shortestPathWithEdge/img/example.png?_tm=1582090208203)

**Input/Output**

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer start**
    
    _Guaranteed constraints:_  
    `1 ≤ start ≤ graph.length`.
    
-   **[input] integer finish**
    
    _Guaranteed constraints:_  
    `1 ≤ finish ≤ graph.length`.
    
-   **[input] integer weight**
    
    _Guaranteed constraints:_  
    `1 ≤ weight ≤ 10^5`.
    
-   **[input] array.array.integer graph**
    
    Adjacency matrix representing the given undirected graph.  `graph[i][j] = 0`  means that there is no edge between vertices  `i`  and  `j`, and  `graph[i][j] = c > 0`  represents an edge with weight  `c`  between vertices  `i`  and  `j`.
    
    _Guaranteed constraints:_  
    `1 ≤ graph.length ≤ 500`,  
    `graph[i].length = graph.length`,  
    `graph[i][i] = 0`,  
    `0 ≤ graph[i][j] ≤ 10^5`,  
    `graph[i][j] = graph[j][i]`.
    
-   **[output] integer**
    
    -   The shortest path from  `start`  to  `finish`  with the possibility of adding an extra edge with the given  `weight`.
