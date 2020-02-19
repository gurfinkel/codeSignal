
Let's define a tree's diameter as the number of nodes on the longest path between any two nodes in the tree. The longest path may or may not include the tree's root. Given a binary tree, find its diameter.

In the diagrams in the examples below, the longest path is indicated by blue nodes.

Example

-   For

```
t = {
    "value": 0,
    "left": {
        "value": 1,
        "left": null,
        "right": {
            "value": 2,
            "left": {
                "value": 3,
                "left": null,
                "right": null
            },
            "right": {
                "value": 4,
                "left": null,
                "right": null
            }
        }
    },
    "right": {
        "value": 5,
        "left": {
            "value": 6,
            "left": null,
            "right": null
        },
        "right": null
    }
}

```

the output should be  
`binaryTreeDiameter(t) = 6`.  
![1st example](https://codesignal.s3.amazonaws.com/tasks/binaryTreeDiameter/img/example1.png?_tm=1581997131163)

-   For

```
t = {
    "value": 1,
    "left": null,
    "right": {
        "value": 2,
        "left": {
            "value": 3,
            "left": null,
            "right": {
                "value": 7,
                "left": null,
                "right": null
            }
        },
        "right": {
            "value": 4,
            "left": {
                "value": 6,
                "left": null,
                "right": null
            },
            "right": {
                "value": 5,
                "left": null,
                "right": null
            }
        }
    }
}

```

the output should be  
`binaryTreeDiameter(t) = 5`.  
![2nd example](https://codesignal.s3.amazonaws.com/tasks/binaryTreeDiameter/img/example2.png?_tm=1581997131378)

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] tree.integer t**
    
    A tree of integers.
    
    _Guaranteed constraints:_  
    `2 ≤ tree size ≤ 105`,  
    `-1000 ≤ node value ≤ 1000`.
    
-   **[output] integer**
    
    -   The diameter of the binary tree  `t`, as described above.