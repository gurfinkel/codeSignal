
You are given a tree with vertices numbered from  `0`to  `N - 1`. The tree is input as an array  `parent`where  `parent[i]`  is the parent of the  _ith_  node of the tree. The root of the tree is the vertex number  `0`and it is its own parent.

You are to paint some of the tree vertices in such a way that the painted vertices along with the edges between them form a  full binary tree. What is the maximum possible  size  of such tree?

Note that the edges' orientations after painting remain the same, so the highest painted vertex will be a new root.

Example

For  `parent = [0, 0, 1, 4, 1]`, the output should be  
`largestFullBinaryTree(parent) = 3`.

The only possible way to make a full binary of size larger than  `1`  is to leave vertices  `1`,  `2`  and  `4`. Here it is:

![](https://codefightsuserpics.s3.amazonaws.com/tasks/largestFullBinaryTree/img/example.png?_tm=1530801828488)

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] array.integer parent**
    
    Array of parents.
    
    _Guaranteed constraints:_  
    `1 ≤ parent.length ≤ 25`,  
    `0 ≤ parent[i] ≤ 20`.
    
-   **[output] integer**