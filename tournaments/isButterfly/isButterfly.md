
You decided to create an automatic image recognizer that will determine the object in the image based on its contours. The main recognition system is already implemented, and now you need to start the teaching process.

Today you want to teach your program to recognize  _butterfly_  patterns, which means that you need to implement a function that, given the  adjacency matrix  representing the contour, will determine whether it's a  _butterfly_  or not.

The  _butterfly_  contour looks like this:

![A butterfly](https://codesignal.s3.amazonaws.com/tasks/isButterfly/img/butterfly.png?_tm=1582028217617)

Given the object's contour as an undirected graph represented by adjacency matrix  `adj`  determine whether it's a  _butterfly_  or not.

Example

For

```
adj = [[false, true, true, false, false],
       [true, false, true, false, false],
       [true, true, false, true, true],
       [false, false, true, false, true],
       [false, false, true, true, false]]

```

the output should be  
`isButterfly(adj) = true`.

Here's what the given graph looks like:

![Example](https://codesignal.s3.amazonaws.com/tasks/isButterfly/img/example1.png?_tm=1582028217870)

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.array.boolean adj**
    
    An adjacency matrix of an undirected graph.
    
    _Guaranteed constraints:_  
    `adj.length == 5`,  
    `adj[i].length == 5`.
    
-   **[output] boolean**
    
    `true`  if the given contour is a butterfly,  `false`  otherwise.
