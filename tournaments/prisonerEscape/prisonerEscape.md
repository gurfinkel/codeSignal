
After long years of sharpening your programming skills and honing your physique you finally made it: as a member of the ProProgrammers team you've entered  [Fort Boyard](https://en.wikipedia.org/wiki/Fort_Boyard_(TV_series))!

You've completed the challenges, collected the gold and managed to find your way out of the Fort, so now there is only one thing left to do. One of your team members was taken as a prisoner when he failed his challenge, and now is your chance to set him free. However, it won't be easy: there are two guards whose job is to stop the prisoner if he tries to escape. The prisoner should avoid the guards at all costs, otherwise you won't be able to help him.

The map of the prison is represented by an undirected  `graph`  that can be disconnected, but can't contain multiedges or loops. Initially one node is occupied by the  _prisoner_, and two other nodes are occupied by the  _guards_. Each move they take occurs in the following order: the  _prisoner_  goes first, and the  _guards_  go second, one at a time. During a turn a person can stay on their node, or move to a neighboring node (i.e. the node connected to their current location by an edge). If at any moment a  _guard_  and a  _prisoner_  turn out to be on the same node, the  _guard_  will grab the  _prisoner_  and won't let him go, so the team won't be able to set him free.

Your task is to find out if the  _guards_  can catch the  _prisoner_, assuming that both the  _guards_  and the  _prisoner_  move optimally.

Example

-   For  `nodes = 5`,

    ```
    graph = [1, 2, 
             2, 3, 
             3, 4, 
             4, 5, 
             5, 1]
    
    ```

    and  `start = [1, 3, 4]`, the output should be  
    `prisonerEscape(nodes, graph, start) = true`.  
    ![](https://codesignal.s3.amazonaws.com/tasks/prisonerEscape/img/ex1.png?_tm=1583438413259)  
    Here's one possible scenario: on the first move the  _prisoner_  stays in his node (if he moves, he'll be caught after the  _guards_  move).  _guard1_  moves to node  `2`  and  _guard2_  to node  `5`. On the second move the  _prisoner_  is forced to stay in his node again because all his neighboring nodes are occupied by  _guards_. However,  _guard1_  will catch the  _prisoner_  in his next turn anyway.

-   For  `nodes = 16`,

    ```
     graph = [1, 2, 1, 4, 1, 5, 1, 13,
              2, 3, 2, 6, 2, 14,
              3, 4, 3, 7, 3, 15,
              4, 8, 4, 16,
              5, 6, 5, 8, 5, 9,
              6, 7, 6, 10,
              7, 8, 7, 11,
              8, 12,
              9, 10, 9, 12, 9, 13,
              10, 11, 10, 14,
              11, 12, 11, 15,
              12, 16,
              13, 14, 13, 16,
              14, 15,
              15, 16]
    
    ```

    and  `start = [1, 5, 16]`, the output should be  
    `prisonerEscape(nodes, graph, start) = false`.

    In this example the  _prisoner_  has a winning strategy to follow. When no  _guard_  threatens to catch him in one move, he just stays in his node. When there is at least one  _guard_  on the neighboring nodes, he goes to the node which isn't neighboring any of the  _guards_, so the  _guards_  can't catch him. Such a node always exists because each node has  `4`  neighboring nodes and these nodes aren't neighboring one another, so if there is one  _guard_  in one of the nodes, there are three other nodes to control for the remaining  _guard_, which is impossible due to the graph structure.


Input/Output

-   **[execution time limit] 26 seconds (js)**

-   **[input] integer nodes**

    An integer, the number of nodes in the graph. The nodes are numbered from  `1`  to  `nodes`  inclusive.

    _Guaranteed constraints:_  
    `3 ≤ nodes ≤ 50`.

-   **[input] array.integer graph**

    An array of integers, where a pair  `(graph[i], graph[i + 1])`  (for even  `i`) denotes an edge between the  `graph[i]th`  and the  `graph[i + 1]th`  nodes.

    _Guaranteed constraints:_  
    `0 ≤ graph.length ≤ 2000`,  
    `1 ≤ graph[i] ≤ nodes`.

-   **[input] array.integer start**

    An array of three distinct integers.  `start[0]`  is the initial  _prisoner_  position, and  `start[1]`  and  `start[2]`  are the  _guards_  positions.

    _Guaranteed constraints:_  
    `1 ≤ start[i] ≤ nodes`.

-   **[output] boolean**

    `true`  if  _guards_  can catch the  _prisoner_  and  `false`  otherwise.
