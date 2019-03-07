
For a set of points  `P`  on a plane, let's denote the set of all distinct distances between the pairs of these points as  `_distinctDistances(P)_`.

Given a sorted list  `distances`, consisting of three pairwise distinct positive integers, find the set of points  `P`  of a minimum size such that  `distances`  is a subset of  `distinctDistances(P)`  (in other words, each element of  `distances`  belongs to  `distinctDistances(P)`). Return the size of  `P`as the answer.

Example

For  `distances = [3, 4, 5]`, the output should be  
`distinctDistances(distances) = 3`.

For instance,  `P`  may consist of  `(0, 0)`,  `(0, 3)`  and  `(4, 0)`.

![](https://codesignal.s3.amazonaws.com/tasks/distinctDistances/img/example.jpg?_tm=1551474471146)

Input/Output

-   **[execution time limit] 4 seconds (py3)**
    
-   **[input] array.integer distances**
    
    _Guaranteed constraints:_  
    `distances.length = 3`,  
    `0 < distances[0] < distances[1] < distances[2] ≤ 109`.
    
-   **[output] integer**