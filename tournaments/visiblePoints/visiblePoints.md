
Given an array of points on a 2D plane, find the maximum number of points that are visible from point  `(0, 0)`  with a viewing angle that is equal to  `45`  degrees.

Example

For

```
  points = [[1, 1], [3, 1], [3, 2], [3, 3],
            [1, 3], [2, 5], [1, 5], [-1, -1],
            [-1, -2], [-2, -3], [-4, -4]]

```

the output should be  `visiblePoints(points) = 6`.

This visualization shows how these  `6`  points can be viewed:

![](https://codesignal.s3.amazonaws.com/tasks/visiblePoints/img/example.png?_tm=1551563208681)

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.array.integer points**
    
    The array of points. For each valid  `i`,  `points[i]`  contains exactly  `2`  elements and represents the  `ith`  point, where  `points[i][0]`  is the  `x`-coordinate and  `points[i][1]`  is the  `y`-coordinate. It is guaranteed that there are no points located at  `(0, 0)`  and there are no two points located at the same place.
    
    _Guaranteed constraints:_  
    `1 ≤ points.length ≤ 105`,  
    `1 ≤ points[i].length = 2`,  
    `-107  ≤ points[i][j] ≤ 107`.
    
-   **[output] integer**
    
    -   The maximum number of points that can be viewed from point  `(0, 0)`  with a viewing angle that is equal to  `45`  degrees.