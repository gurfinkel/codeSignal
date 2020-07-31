
The sum of a subtree is the sum of all the node values in that subtree, including its root.

Given a binary tree of integers, find the most frequent sum (or sums) of its subtrees.

Example

-   For

```
t = {
    "value": 1,
    "left": {
        "value": 2,
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

the output should be  
`mostFrequentSum(t) = [2, 3, 6]`.  
![1st example](https://codesignal.s3.amazonaws.com/tasks/mostFrequentSum/img/example1.png?_tm=1582044304342)

Since all the sum values in this tree occur only once, return all of them in ascending order.

-   For

```
t = {
    "value": -2,
    "left": {
        "value": -3,
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
`mostFrequentSum(t) = [-3]`.  
![2nd example](https://codesignal.s3.amazonaws.com/tasks/mostFrequentSum/img/example2.png?_tm=1582044305017)

There are  `3`  subtree sums for this tree:  `-2 + (-3) + 2 = -3`,  `-3`, and  `-2`. The most frequent sum is  `-3`  since it appears twice.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] tree.integer t**
    
    A tree of integers.
    
    _Guaranteed constraints:_  
    `0 ≤ tree size ≤ 10^5`,  
    `-20000 ≤ node value ≤ 20000`.
    
-   **[output] array.integer**
    
    -   The most frequent subtree sum. If there are several such sums, return them sorted in  _ascending_  order.
