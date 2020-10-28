
You decided to create an automatic image recognizer that will determine the object in the image based on its contours. The main recognition system is already implemented, and now you need to start the teaching process.

Today you want to teach your program to recognize  _star_  patterns in the image of the night sky, which means that you need to implement a function that, given the  adjacency matrix  representing a number of contours in the sky, will find the number of  _stars_  in it.

The graph representing some contour is cosidered to be a  _star_  if it is a  tree  of size  `2`  or if it is a tree of size  `k > 2`  with one internal node (which is a tree root at the same time) and  `k - 1`  leaves.  
Here is an example of some stars:

![Stars](https://codesignal.s3.amazonaws.com/tasks/countStars/img/stars.png?_tm=1582008170086)

Given the sky objects' contours as an undirected graph represented by its adjacency matrix  `adj`, calculate the number of  _stars_  in it.

Example

For

```
adj = [[false, true, false, false, false],
       [true, false, false, false, false],
       [false, false, false, true, false],
       [false, false, true, false, false],
       [false, false, false, false, false]]

```

the output should be  
`countStars(adj) = 2`.

Here's what the given graph looks like:

![Example](https://codesignal.s3.amazonaws.com/tasks/countStars/img/example1.png?_tm=1582008170353)

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.array.boolean adj**
    
    An adjacency matrix of an undirected graph.
    
    _Guaranteed constraints:_  
    `2 < adj.length ≤ 100`,  
    `adj[i].length == adj.length`.
    
-   **[output] integer**
    
    The number of  _star_  contours in the sky.
