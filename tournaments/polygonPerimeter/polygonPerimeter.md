
You have a rectangular white board with some black cells. The black cells create a connected black figure, i.e. it is possible to get from any black cell to any other one through connected adjacent (sharing a common side) black cells.

Find the perimeter of the black figure assuming that a single cell has unit length.

It's guaranteed that there is at least one black cell on the table.

Example

-   For
    
    ```
    matrix = [[false, true,  true ],
              [true,  true,  false],
              [true,  false, false]]
    
    ```
    
    the output should be  
    `polygonPerimeter(matrix) = 12`.
    
    ![](https://codesignal.s3.amazonaws.com/tasks/polygonPerimeter/img/example1.png?_tm=1582079543759)
    
-   For
    
    ```
    matrix = [[true, true,  true],
              [true, false, true],
              [true, true,  true]]
    
    ```
    
    the output should be  
    `polygonPerimeter(matrix) = 16`.
    
    ![](https://codesignal.s3.amazonaws.com/tasks/polygonPerimeter/img/example2.png?_tm=1582079543992)
    

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.array.boolean matrix**
    
    A matrix of booleans representing the rectangular board where  `true`  means a  _black_  cell and  `false`  means a  _white_  one.
    
    _Guaranteed constraints:_  
    `2 ≤ matrix.length ≤ 5`,  
    `2 ≤ matrix[0].length ≤ 5`.
    
-   **[output] integer**