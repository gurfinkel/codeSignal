
A tree is considered a binary search tree (BST) if for each of its nodes the following is true:

1.  The left subtree of a node contains only nodes with keys  _less than_  the node's key.
2.  The right subtree of a node contains only nodes with keys  _greater than_  the node's key.
3.  Both the left and the right subtrees must also be binary search trees.

An empty tree (has no nodes) is also considered to be BST.

Given a binary tree, determine whether it is a BST or not.

Example

-   For

```
t = {
    "value": -1,
    "left": {
        "value": -2,
        "left": null,
        "right": null
    },
    "right": {
        "value": -3,
        "left": null,
        "right": null
    }
}

```

the output should be  
`isBST(t) = false`.

![1st example](https://codesignal.s3.amazonaws.com/tasks/isBST/img/example1.png?_tm=1582028037292)

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
        "value": 2,
        "left": null,
        "right": null
    }
}

```

the output should be  
`isBST(t) = true`.

![2nd example](https://codesignal.s3.amazonaws.com/tasks/isBST/img/example2.png?_tm=1582028037571)

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] tree.integer t**
    
    A tree of integers.
    
    _Guaranteed constraints:_  
    `0 ≤ tree size ≤ 30145`,  
    `-10^9  ≤ node value ≤ 10^9`.
    
-   **[output] boolean**
    
    -   Return  `true`  if the given tree is a binary search tree, otherwise return  `false`.