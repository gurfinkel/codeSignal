
Consider several points lying on a straight line. Call an unordered triple of points an  _equidistant triple_  if one of them is the mid-point of the segment formed by the other two.

Given the coordinates of the points, find the number of equidistant triples formed by them.

Example

For  `coordinates = [1, 2, 4, 6, 7, 8]`, the output should be  
`equidistantTriples(coordinates) = 4`.

The equidistant triples are:  `(1, 4, 7), (2, 4, 6), (4, 6, 8), (6, 7, 8)`.

Check out the image below for better understanding:

![](https://codefightsuserpics.s3.amazonaws.com/tasks/equidistantTriples/img/example.png?_tm=1530798830895)

Input/Output

-   **[execution time limit] 3 seconds (java)**
    
-   **[input] array.integer coordinates**
    
    Sorted array of distinct integers.
    
    _Guaranteed constraints:_  
    `2 ≤ coordinates.length ≤ 2500`,  
    `-10000 ≤ coordinates[i] ≤ 10000`.
    
-   **[output] integer**