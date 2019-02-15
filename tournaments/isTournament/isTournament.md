
Determine if the given directed graph is a  tournament.

Example

For  
`n = 5`,  
`fromV = [2, 1, 3, 4, 4, 4, 1, 2, 3, 4]`, and  
`toV = [3, 2, 1, 3, 2, 1, 5, 5, 5, 5]`,  
the output should be  
`isTournament(n, fromV, toV) = true`.

Here's how the given graph looks like:

![](https://codefightsuserpics.s3.amazonaws.com/tasks/isTournament/img/example.png?_tm=1530801767341)

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] integer n**
    
    A positive integer  `n`  representing the number of vertices in the given graph.
    
    _Guaranteed constraints:_  
    `1 ≤ n ≤ 10`.
    
-   **[input] array.integer fromV**
    
    An array of integers containing integers less than or equal to  `n`.
    
    _Guaranteed constraints:_  
    `0 ≤ fromV.length ≤ 50`,  
    `1 ≤ fromV[i] ≤ n`.
    
-   **[input] array.integer toV**
    
    For each  `i`  in range  `[0, fromV.length)`there is an edge from the vertex number  `fromV[i]`  to the vertex  `toV[i]`  in the given directed graph.
    
    _Guaranteed constraints:_  
    `toV.length = fromV.length`,  
    `1 ≤ toV[i] ≤ n`.
    
-   **[output] boolean**
    
    -   `true`  if the given graph is a tournament,  `false`  otherwise.