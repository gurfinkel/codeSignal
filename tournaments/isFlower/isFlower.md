
You decided to create an automatic image recognizer that will determine the object in the image based on its contours. The main recognition system is already implemented, and now you need to start the teaching process.

Today you want to teach your program to recognize  _flower_  patterns, which means that you need to implement a function that, given the  adjacency matrix  representing the contour, will determine whether it's a  _flower_  or not.

The  _flower_  contour consists of several (at least one) petals.  
Petal contours are the same-sized (of size greater than  `2`)  complete graphs  with exactly one common vertex.  
Here are some examples of the  _flower_  contours:

![flowers](https://codesignal.s3.amazonaws.com/tasks/isFlower/img/flowers.png?_tm=1582029102247)

Given the object's contour as an undirected graph represented by adjacency matrix  `adj`  determine whether it's a  _flower_  or not.

Example

For

```
adj = [[false, true, true, true, true],
       [true, false, true, false, false],
       [true, true, false, false, false],
       [true, false, false, false, true],
       [true, false, false, true, false]]

```

the output should be  
`isFlower(adj) = true`.

Here's what the given graph looks like:

![Example](https://codesignal.s3.amazonaws.com/tasks/isFlower/img/example1.png?_tm=1582029102479)

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.array.boolean adj**
    
    An adjacency matrix of an undirected graph.
    
    _Guaranteed constraints:_  
    `2 < adj.length < 100`,  
    `adj[i].length == adj.length` .
    
-   **[output] boolean**
    
    `true`  if the given contour is a  _flower_,  `false`  otherwise.
