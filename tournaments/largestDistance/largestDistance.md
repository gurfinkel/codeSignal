
You are given a set of points on the Cartesian plane. Consider the distance between two points as the maximum difference of their coordinates. For example, the distance between points  `(1, 2)`  and  `(4, 6)`  is equal to  `max(|4 - 1|, |6 - 2|) = 4`.

Given a set of points, find the pair with the largest distance and return the value of their distance.

Example

For  `a = [7, 6, 6, 8, 1, 2, 8, 6]`, the output should be  
`largestDistance(a) = 7`.

Check out the image below for better understanding:

![](https://codesignal.s3.amazonaws.com/tasks/largestDistance/img/example.png?_tm=1551474925885)

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer a**
    
    Points are given in one array  `a`, where  `a[2 * i]`  is the  _x_  coordinate of the  `ith`  point, and  `a[2 * i + 1]`  is the  _y_  coordinate of the  `ith`  point. All coordinates are positive. The number of points is less than  `1000`. The points are not necessarily distinct.
    
    _Guaranteed constraints:_  
    `4 ≤ a.length ≤ 10`,  
    `0 ≤ a[i] ≤ 50`.
    
-   **[output] integer**
    
    -   The maximum distance between two points from the input set.