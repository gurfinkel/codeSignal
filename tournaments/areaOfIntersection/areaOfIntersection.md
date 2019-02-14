
Let's define a specific geometric shape on an infinite grid:

-   A shape with an order of  `1`  is just a single cell.
-   A shape with an order of  `2`  can be visualized as a shape with an order of  `1`with a new cell added to each edge of the original shape, as in the diagram below.
-   Following that same pattern, a shape with an order of  `n`  can be visualized as a shape with an order of  `n - 1`  with a new cell added to each edge of each cell in the original shape.

![](https://codefightsuserpics.s3.amazonaws.com/tasks/areaOfIntersection/img/shapes.png?_tm=1490625495103)

You have two such shapes. Each shape is represented as an array containing three integers: the first element indicates the order of the shape, while the second and third elements indicate the coordinates of the shape's center on the grid. Calculate the number of cells in the area where the  `shape1`and  `shape2`  intersect - in other words, the cells that the two shapes have in common.

Example

For  `shape1 = [3, 0, -1]`  and  `shape2 = [5, 3, 0]`, the output should be  
`areaOfIntersection(shape1, shape2) = 8`.

![](https://codefightsuserpics.s3.amazonaws.com/tasks/areaOfIntersection/img/example.png?_tm=1490625495308)

In this example, the cells that belong only to the first shape are blue, the cells that belong only to the second shape are yellow, and the  `8`  cells that belong to both of them are green.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer shape1**
    
    An array of three integers describing the first shape, which has an order of  `shape1[0]`and is centered at  `(shape1[1], shape1[2])`.
    
    _Guaranteed constraints:_  
    `shape1.length = 3`,  
    `-500 ≤ shape1[i] ≤ 500`,  
    `shape1[0] > 0`.
    
-   **[input] array.integer shape2**
    
    An array of three integers describing the second shape in the same manner.
    
    _Guaranteed constraints:_  
    `shape2.length = 3`,  
    `-500 ≤ shape2[i] ≤ 500`,  
    `shape2[0] > 0`.
    
-   **[output] integer**
    
    -   The number of cells that belong to both shapes.