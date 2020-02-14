
Given a binary tree  `t`  and an integer  `s`, determine whether there is a root to leaf path in  `t`  such that the sum of vertex values equals  `s`.

Example

-   For
    
    ```
    t = {
        "value": 4,
        "left": {
            "value": 1,
            "left": {
                "value": -2,
                "left": null,
                "right": {
                    "value": 3,
                    "left": null,
                    "right": null
                }
            },
            "right": null
        },
        "right": {
            "value": 3,
            "left": {
                "value": 1,
                "left": null,
                "right": null
            },
            "right": {
                "value": 2,
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
        }
    }
    
    ```
    
    and  
    `s = 7`,  
    the output should be  `hasPathWithGivenSum(t, s) = true`.
    
    This is what this tree looks like:
    
    ```
          4
         / \
        1   3
       /   / \
      -2  1   2
        \    / \
         3  -2 -3
    
    ```
    
    Path  `4 -> 3 -> 2 -> -2`  gives us  `7`, the required sum.
    
-   For
    
    ```
    t = {
        "value": 4,
        "left": {
            "value": 1,
            "left": {
                "value": -2,
                "left": null,
                "right": {
                    "value": 3,
                    "left": null,
                    "right": null
                }
            },
            "right": null
        },
        "right": {
            "value": 3,
            "left": {
                "value": 1,
                "left": null,
                "right": null
            },
            "right": {
                "value": 2,
                "left": {
                    "value": -4,
                    "left": null,
                    "right": null
                },
                "right": {
                    "value": -3,
                    "left": null,
                    "right": null
                }
            }
        }
    }
    
    ```
    
    and  
    `s = 7`,  
    the output should be  `hasPathWithGivenSum(t, s) = false`.
    
    This is what this tree looks like:
    
    ```
          4
         / \
        1   3
       /   / \
      -2  1   2
        \    / \
         3  -4 -3
    
    ```
    
    There is no path from root to leaf with the given sum  `7`.
    

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] tree.integer t**
    
    A binary tree of integers.
    
    _Guaranteed constraints:_  
    `0 ≤ tree size ≤ 5 · 104`,  
    `-1000 ≤ node value ≤ 1000`.
    
-   **[input] integer s**
    
    An integer.
    
    _Guaranteed constraints:_  
    `-4000 ≤ s ≤ 4000`.
    
-   **[output] boolean**
    
    -   Return  `true`  if there is a path from root to leaf in  `t`  such that the sum of node values in it is equal to  `s`, otherwise return  `false`.
