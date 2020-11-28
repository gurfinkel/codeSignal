
You decided to create an automatic image recognizer that will determine the object in the image based on its contours. The main recognition system is already implemented, and now you need to start the teaching process.

Today you want to teach your program to recognize  _bull_  patterns, which means that you need to implement a function that, given the  adjacency matrix  representing the contour, will determine whether it's a  _bull_  or not.

You noticed that although all  _bull_  heads are similar there is some variation in the shapes of their horns, so there are several possible bull contours. The image below shows  _all_  such contours.

![Bulls](https://codesignal.s3.amazonaws.com/tasks/isBull/img/bulls.png?_tm=1582028203839)

Given the object's contour as an undirected graph represented by adjacency matrix  `adj`  determine whether it's a  _bull_  or not.

Example

For

```
adj = [[false, true, false, false, false],
       [true, false, true, true, false],
       [false, true, false, true, false],
       [false, true, true, false, true],
       [false, false, false, true, false]]

```

the output should be  
`isBull(adj) = true`.

Here's how the given graph looks like:

![Example](https://codesignal.s3.amazonaws.com/tasks/isBull/img/example1.png?_tm=1582028204270)

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.array.boolean adj**
    
    An adjacency matrix of an undirected graph.
    
    _Guaranteed constraints:_  
    `adj.length == 5`,  
    `adj[i].length == 5`.
    
-   **[output] boolean**
    
    `true`  if the given contour is a bull,  `false`  otherwise.
