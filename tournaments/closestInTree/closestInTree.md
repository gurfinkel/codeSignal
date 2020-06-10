
A tree is considered to be a binary search tree (BST) if for its every node the following is true:

1.  The left subtree of a node contains only nodes with keys  _less than_  the node's key.
2.  Thee right subtree of a node contains only nodes with keys  _greater than_  the node's key.
3.  Both the left and the right subtrees must also be binary search trees.

Given a binary search tree  `t`  and an element  `n`, find and return the element in  `t`  closest to  `n`. If there are several such elements, return the topmost one.

Example

-   For

```
t = {
    "value": 1,
    "left": {
        "value": 0,
        "left": null,
        "right": null
    },
    "right": {
        "value": 3,
        "left": null,
        "right": null
    }
}

```

and  `n = 2`, the output should be  
`closestInTree(t, n) = 1`.

While there are two elements in this tree that are equally close to  `2`, we choose  `1`  since it appears at the topmost position.

-   For

```
t = {
    "value": 10,
    "left": {
        "value": 9,
        "left": null,
        "right": null
    },
    "right": {
        "value": 12,
        "left": {
            "value": 11,
            "left": null,
            "right": null
        },
        "right": {
            "value": 13,
            "left": null,
            "right": null
        }
    }
}

```

and  `n = 12`, the output should be  
`closestInTree(t, n) = 12`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] tree.integer t**
    
    A tree of integers.
    
    _Guaranteed constraints:_  
    `1 ≤ tree size ≤ 8 * 10^4`,  
    `-10^9  ≤ node value ≤ 10^9`.
    
-   **[input] integer n**
    
    An integer.
    
    _Guaranteed constraints:_  
    `-10^9  ≤ n ≤ 10^9`.
    
-   **[output] integer**
    
    -   The  `t`  node value that is closest to  `n`. If there are several such elements, return the topmost one.