
You and your friend are walking in the woods. You are gathering mushrooms and catching butterflies, and your friend is drawing a map of the woods: he is a very cautious person, who doesn't want to get lost. When you get tired of running around, you decide to check out the map your friend has drawn so far, and it strikes you: looks like the woods you're walking in represent a  _pseudoforest_!

Since you're a programmer and think in terms of algorithms, you need to write a function that, given a map, determines whether it is a  _pseudoforest_  or not. The map your friend drew represents a graph  `wmap`  of  `n`  vertices. A map is called  _pseudoforest_  if each of its  connected components  contains no more than one cycle.

Example

-   For  `n = 7`  and  `wmap = [[0, 1], [1, 2], [2, 3], [3, 1], [3, 4], [5, 6]]`, the output should be  
    `isPseudoforest(n, wmap) = true`.
    
    ![](https://codesignal.s3.amazonaws.com/tasks/isPseudoforest/img/example1.png?_tm=1582031712908)
    
    One of the connected components contains only one cycle (`1 - 2 - 3`), and the other one has no cycles at all.
    
-   For  `n = 7`  and  `wmap = [[0, 1], [1, 2], [2, 3], [3, 1], [3, 4], [4, 0], [5, 6]]`, the output should be  
    `isPseudoforest(n, wmap) = false`.
    
    ![](https://codesignal.s3.amazonaws.com/tasks/isPseudoforest/img/example2.png?_tm=1582031713363)
    
    There are three cycles in one of the connected components:
    
    -   `1 - 2 - 3`;
    -   `1 - 3 - 4 - 0`;
    -   `0 - 1 - 2 - 3 - 4`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer n**
    
    Number of vertices in a map.
    
    _Guaranteed constraints:_  
    `1 ≤ n ≤ 10^5`.
    
-   **[input] array.array.integer wmap**
    
    Edges drawn on the map.  `wmap[i]`  contains two elements and represents one edge for each valid  `i`.  
    It is guaranteed that between any two vertices there is no more than one edge.
    
    _Guaranteed constraints:_  
    `0 ≤ wmap.length ≤ 10^5`,  
    `wmap[i].length = 2`,  
    `0 ≤ wmap[i][j] < n`,  
    `wmap[i][0] ≠ wmap[i][1]`.
    
-   **[output] boolean**
    
    `true`  if  `wmap`  represents a  _pseudoforest_  and  `false`  otherwise.
