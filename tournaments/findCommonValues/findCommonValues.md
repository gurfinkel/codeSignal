
_Note: Try to solve this task in  `O(n)`  time, where  `n`  is the number of nodes in both trees, since this is what you would be asked to do in an interview._

A tree is considered a binary search tree (BST) if for each of its nodes the following is true:

1.  The left subtree of a node contains only nodes with keys  _less than_  the node's key.
2.  The right subtree of a node contains only nodes with keys  _greater than_  the node's key.
3.  Both the left and the right subtrees must also be binary search trees.

An empty tree (a tree with no nodes) is also considered to be BST.

Given two binary search trees  `t1`  and  `t2`, return all values that are contained in both trees, sorted in ascending order.

Example

-   For

```
t1 = {
    "value": 2,
    "left": {
        "value": 1,
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

and

```
t2 = {
    "value": 3,
    "left": {
        "value": 2,
        "left": null,
        "right": null
    },
    "right": {
        "value": 9,
        "left": null,
        "right": null
    }
}

```

the output should be  
`findCommonValues(t1, t2) = [2, 3]`;

-   For

```
t1 = {
    "value": 1,
    "left": {
        "value": 0,
        "left": null,
        "right": null
    },
    "right": {
        "value": 2,
        "left": null,
        "right": null
    }
}

```

and

```
t2 = {
    "value": 5,
    "left": {
        "value": 4,
        "left": null,
        "right": null
    },
    "right": {
        "value": 6,
        "left": null,
        "right": null
    }
}

```

the output should be  
`findCommonValues(t1, t2) = []`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] tree.integer t1**
    
    A tree of integers.
    
    _Guaranteed constraints:_  
    `0 ≤ tree size ≤ 10^4`,  
    `-105  ≤ node value ≤ 10^5`.
    
-   **[input] tree.integer t2**
    
    A tree of integers.
    
    _Guaranteed constraints:_  
    `0 ≤ tree size ≤ 10^4`,  
    `-105  ≤ node value ≤ 10^5`.
    
-   **[output] array.integer**
    
    -   The common values of  `t1`  and  `t2`, sorted in ascending order.