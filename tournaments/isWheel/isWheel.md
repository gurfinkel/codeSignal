
You decided to create an automatic image recognizer that will determine the object in the image based on its contours. The main recognition system is already implemented, and now you need to start the teaching process.

Today you want to teach your program to recognize  _wheel_  patterns, which means that you need to implement a function that, given the  adjacency matrix  representing the contour, will determine whether it's a  _wheel_  or not.

The  _wheel_  contour can be thought of as a single center vertex and a regular polygon with  `n`  (`n > 2`) vertices which are all connected to the center. Here is an example:

![A wheel](https://codesignal.s3.amazonaws.com/tasks/isWheel/img/wheel.png?_tm=1582033246637)

Given the object's contour as an undirected graph represented by its  _adjacency matrix_  `adj`  determine whether it's a  _wheel_  or not.

Example

For

```
adj = [[false, true, true, true, true],
       [true, false, true, false, true],
       [true, true, false, true, false],
       [true, false, true, false, true],
       [true, true, false, true, false]]

```

the output should be  
`isWheel(adj) = true`.

Here's what the given graph looks like:

![Example](https://codesignal.s3.amazonaws.com/tasks/isWheel/img/example1.png?_tm=1582033247042)

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.array.boolean adj**
    
    An adjacency matrix of an undirected graph.
    
    _Guaranteed constraints:_  
    `3 < adj.length < 100`,  
    `adj[i].length == adj.length`.
    
-   **[output] boolean**
    
    `true`  if the given contour is a  _wheel_,  `false`  otherwise.
