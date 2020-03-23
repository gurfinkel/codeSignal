
A tree is considered a binary search tree (BST) if for each of its nodes the following is true:

1.  The left subtree of a node contains only nodes with keys  _less than_  the node's key.
2.  The right subtree of a node contains only nodes with keys  _greater than_  the node's key.
3.  Both the left and the right subtrees must also be binary search trees.

Removing a value  `x`  from a BST  `t`  is done in the following way:

-   If there is no  `x`  in  `t`, nothing happens;
-   Otherwise, let  `t'`  be a subtree of  `t`  such that  `t'.value = x`.
    -   If  `t'`  has a left subtree, remove the rightmost node from it and put it at the root of  `t'`;
    -   Otherwise, remove the root of  `t'`  and its right subtree becomes the new  `t'`s root.

For example, removing  `4`  from the following tree has no effect because there is no such value in the tree:

```
    5
   / \
  2   6
 / \   \
1   3   8
       /
      7

```

Removing  `5`  causes  `3`  (the rightmost node in left subtree) to move to the root:

```
    3
   / \
  2   6
 /     \
1       8
       /
      7

```

And removing  `6`  after that creates the following tree:

```
    3
   / \
  2   8
 /   /
1   7

```

You're given a binary search tree  `t`  and an array of numbers  `queries`. Your task is to remove  `queries[0]`,  `queries[1]`, etc., from  `t`, step by step, following the algorithm above. Return the resulting BST.

Example

For

```
t = {
    "value": 5,
    "left": {
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
    },
    "right": {
        "value": 6,
        "left": null,
        "right": {
            "value": 8,
            "left": {
                "value": 7,
                "left": null,
                "right": null
            },
            "right": null
        }
    }
}

```

and  `queries = [4, 5, 6]`, the output should be

```
deleteFromBST(t, queries) = {
    "value": 3,
    "left": {
        "value": 2,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": null
    },
    "right": {
        "value": 8,
        "left": {
            "value": 7,
            "left": null,
            "right": null
        },
        "right": null
    }
}

```

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] tree.integer t**
    
    A tree of integers.
    
    _Guaranteed constraints:_  
    `0 ≤ t size ≤ 1000`,  
    `-109  ≤ node value ≤ 109`.
    
-   **[input] array.integer queries**
    
    An array that contains the numbers to be deleted from  `t`.
    
    _Guaranteed constraints:_  
    `1 ≤ queries.length ≤ 1000`,  
    `-109  ≤ queries[i] ≤ 109`.
    
-   **[output] tree.integer**
    
    -   The tree after removing all the numbers in  `queries`, following the algorithm above.