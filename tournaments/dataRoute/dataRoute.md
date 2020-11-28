
Two Sigma's mission is to uncover value in the world's data, and as part of that it's necessary to download massive amounts of information on a regular basis. Naturally, this data should be transferred as quickly and efficiently as possible.

A new data  `resource`  was recently added to the network, and your job is to establish a connection between it and Two Sigma's  `server`. Due to security reasons, all connections in Two Sigma's  `network`  are unidirectional (i.e. only have a one-way connection), and no data can be stored on any node of the  `network`. This means that every second the amount of data a node receives should be equal to the amount of data it forwards. The only exceptions to this rule are  `resource`  and  `server`, since the former only sends data while the latter only receives it.

Unfortunately, some segments of the  `network`  are slower than is ideal due to limitations with legacy telecommunication operators around the world. This complicates finding the optimal route through the  `network`  significantly, which is why your help is required.

Find a route between the  `resource`  and the  `server`  that maximizes the amount of data downloaded in a second, and return this maximum value.

Example

For  `resource = 4`,  `server = 5`, and

```
network = [[0, 2, 4, 8, 0, 0],
           [0, 0, 0, 9, 0, 0],
           [0, 0, 0, 0, 0, 10],
           [0, 0, 6, 0, 0, 10],
           [10, 10, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0]]

```

the output should be  `dataRoute(resource, server, network) = 19`.

Here's what the  `network`  looks like:  
![](https://codesignal.s3.amazonaws.com/tasks/dataRoute/img/network.png?_tm=1582011319769)

And here's how data should be transfered within it:  
![](https://codesignal.s3.amazonaws.com/tasks/dataRoute/img/flow.png?_tm=1582011320159)

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer resource**
    
    A 0-based index of the  `resource`  node.
    
    _Guaranteed constraints:_  
    `0 ≤ resource < 15`.
    
-   **[input] integer server**
    
    A 0-based index of the  `server`  node.
    
    _Guaranteed constraints:_  
    `0 ≤ server < 15`,  
    `server ≠ resource`.
    
-   **[input] array.array.integer network**
    
    A square matrix of non-zero elements.  `network[i][j]`  corresponds to the maximum amount of data that can be transfered from the  `ith`  to the  `jth`  node in one second, in megabytes.
    
    Note that although all connections go only one way, there can be  _two_  routes between two nodes  `a`  and  `b`, one transferring data from  `a`  to  `b`  and another one from  `b`  to  `a`.
    
    _Guaranteed constraints:_  
    `2 ≤ network.length ≤ 15`,  
    `network[i].length = network.length`,  
    `0 ≤ network[i][j] ≤ 10^5`,  
    `network[i][i] = 0`.
    
-   **[output] integer**
    
    The maximum amount of data that can be transferred in one second, in megabytes.
