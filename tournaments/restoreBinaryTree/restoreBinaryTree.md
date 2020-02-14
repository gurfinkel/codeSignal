
_Note: Your solution should have  `O(inorder.length)`  time complexity, since this is what you will be asked to accomplish in an interview._

Let's define  _inorder_  and  _preorder_  traversals of a binary tree as follows:

-   _Inorder_  traversal first visits the left subtree, then the root, then its right subtree;
-   _Preorder_  traversal first visits the root, then its left subtree, then its right subtree.

For example, if tree looks like this:

```
    1
   / \
  2   3
 /   / \
4   5   6

```

then the traversals will be as follows:

-   _Inorder_  traversal:  `[4, 2, 1, 5, 3, 6]`
-   _Preorder_  traversal:  `[1, 2, 4, 3, 5, 6]`

Given the  _inorder_  and  _preorder_  traversals of a binary tree  `t`, but not  `t`  itself, restore  `t`  and return it.

Example

-   For  `inorder = [4, 2, 1, 5, 3, 6]`  and  `preorder = [1, 2, 4, 3, 5, 6]`, the output should be
    
    ```
    restoreBinaryTree(inorder, preorder) = {
        "value": 1,
        "left": {
            "value": 2,
            "left": {
                "value": 4,
                "left": null,
                "right": null
            },
            "right": null
        },
        "right": {
            "value": 3,
            "left": {
                "value": 5,
                "left": null,
                "right": null
            },
            "right": {
                "value": 6,
                "left": null,
                "right": null
            }
        }
    }
    
    ```
    
-   For  `inorder = [2, 5]`  and  `preorder = [5, 2]`, the output should be
    
    ```
    restoreBinaryTree(inorder, preorder) = {
        "value": 5,
        "left": {
            "value": 2,
            "left": null,
            "right": null
        },
        "right": null
    }
    
    ```
    

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer inorder**
    
    An  _inorder_  traversal of the tree. It is guaranteed that all numbers in the tree are pairwise distinct.
    
    _Guaranteed constraints:_  
    `1 ≤ inorder.length ≤ 2 · 103`,  
    `-105  ≤ inorder[i] ≤ 105`.
    
-   **[input] array.integer preorder**
    
    A  _preorder_  traversal of the tree.
    
    _Guaranteed constraints:_  
    `preorder.length = inorder.length`,  
    `-105  ≤ preorder[i] ≤ 105`.
    
-   **[output] tree.integer**
    
    -   The restored binary tree.
