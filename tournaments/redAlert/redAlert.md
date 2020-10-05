
After long years of sharpening your programming skills and honing your physique you finally made it: as a member of the ProProgrammers team you've entered  [Fort Boyard](https://en.wikipedia.org/wiki/Fort_Boyard_(TV_series))!

Your team has successfully completed several challenges so far, and one of your teammates is ready to face the next one. In this challenge the participant should make her way through a corridor covered in red laser rays. If she touches one of the rays, she will fail the challenge and become the prisoner of the Fort.

The corridor has several levels, so it can be represented as an undirected graph of the known number of  `nodes`  with start at node  `1`  and finish at node  `nodes`, both 1-based. Each move the participant can move to the node adjacent to her current position. Since you prepared for each challenge thoroughly, you know when and where the laser rays appear: on the  `ith`  (1-based) move the rays disappear from their previous locations and appear in all the nodes  `x`, such that  `x % k = i % k`, where  `%`  stands for the modulo operation and  `k`  is known. If your teammate ends up in node  `x`  when the rays appear there, she'll fail.

Your goal is to calculate the minimum number of moves required to reach the last node from the node  `1`, or  `-1`  if it's impossible.

Example

-   For  `nodes = 5`,  `corridor = [1, 2, 1, 3, 2, 4, 3, 5, 4, 5]`,  
    and  `k = 4`, the output should be  
    `redAlert(nodes, corridor, k) = 2`.
    
    As you can see in the image below, the optimal way is to go to node  `1`  on the first move and to node  `5`  on the second one.  
    ![](https://codesignal.s3.amazonaws.com/tasks/redAlert/img/ex1.png?_tm=1582083477017)
    
-   For  `nodes = 4`,  `corridor = [1, 2, 1, 3, 2, 4, 3, 4]`,  
    and  `k = 2`, the output should be  
    `redAlert(nodes, corridor, k) = -1`.
    
    As you can see in the following image, your teammate will inevitably end up at an even node on an even move, i.e. when the lasers appear there. Thus, the answer is  `-1`.  
    ![](https://codesignal.s3.amazonaws.com/tasks/redAlert/img/ex2.png?_tm=1582083477311)
    

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer nodes**
    
    The number of nodes that comprise the corridor.
    
    _Guaranteed constraints:_  
    `2 ≤ nodes ≤ 1000`.
    
-   **[input] array.integer corridor**
    
    An array of integers that represents a corridor graph, where a pair  `(corridor[i], corridor[i + 1])`  (for even  `i`) is an edge between the  `corridor[i]th`  and the  `corridor[i + 1]th`  nodes.
    
    _Guaranteed constraints:_  
    `0 ≤ corridor.length ≤ 10^5`,  
    `1 ≤ corridor[i] ≤ nodes`.
    
-   **[input] integer k**
    
    _Guaranteed constraints:_  
    `2 ≤ k ≤ 10`.
    
-   **[output] integer**
    
    The minimal number of moves required to reach the  `nodeth`  from node  `1`, or  `-1`  if it's impossible to do so.
