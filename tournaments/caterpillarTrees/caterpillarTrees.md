
Not long ago you discovered a wonderful tree in the nearby woods that made you very curious about the greenery around you. You went to the nearby woods and drew various plants in your notebook. The plants in the woods have various structures: some of them even contain loops!

Anyway, for now you are interested only in  trees. You came up with a brand new property: you call a tree a  _caterpillar_  if there exists a path in it, such that each vertex of a tree either belongs to this path or is connected to one of its vertices by a single edge. To find out more about them, you would like to write a program that will find all interesting  _trees_  in the structures you drew in your notebook.

The plants you drew consist of  `n`  vertices and are connected by several  `edges`. Calculate the number of regular  _trees_  and  _caterpillar trees_  in the structures you drew in your notebook.

Example

-   For  `n = 21`  and

    ```
    edges = [[0, 1], [1, 2], [2, 3], [2, 4], [4, 5], [4, 6], [4, 7],
             [4, 8], [4, 9], [4, 10], [10, 11], [11, 12], [11, 13],
             [11, 14], [14, 15], [14, 16], [14, 17], [14, 18], [14, 19]]
    
    ```

    the output should be  `caterpillarTrees(n, edges) = [2, 2]`.

    ![](https://codesignal.s3.amazonaws.com/tasks/caterpillarTrees/img/example1.png?_tm=1582000516228)

    There are two connected components and both of them are  _trees_  and  _caterpillar_  trees.

-   For  `n = 22`  and

    ```
    edges = [[0, 1], [1, 2], [2, 3], [2, 4], [4, 5], [4, 6], [4, 7],
             [4, 8], [4, 9], [4, 10], [10, 11], [11, 12], [11, 13],
             [11, 14], [14, 15], [14, 16], [14, 17], [14, 18], [14, 19], [13, 20]]
    
    ```

    the output should be  `caterpillarTrees(n, edges) = [2, 1]`.

    ![](https://codesignal.s3.amazonaws.com/tasks/caterpillarTrees/img/example2.png?_tm=1582000516545)

    The first connected component is a  _tree_, but not a  _caterpillar_  tree, because vertex  `20`  is not directly connected to the central path.


Input/Output

-   **[execution time limit] 4 seconds (js)**

-   **[input] integer n**

    The number of vertices in the structures drawn in your notebook.

    _Guaranteed constraints:_  
    `1 ≤ n ≤ 10^5`.

-   **[input] array.array.integer edges**

    Edges drawn in the notebook.  `edges[i]`  for each valid  `i`  contains two elements and represents an edge that connects  `edges[i][0]`  and  `edges[i][1]`.  
    It is guaranteed that between any two vertices there is no more than one edge.

    _Guaranteed constraints:_  
    `0 ≤ edges.length ≤ 10^5`,  
    `edges[i].length = 2`,  
    `0 ≤ edges[i][j] < n`.

-   **[output] array.integer**

    Array of two integers, where the first represents the number of  _trees_  in your woods and the second represents the number of  _caterpillar_  trees in it.
