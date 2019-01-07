
The  _longest diagonals_  of a square matrix are defined as follows:

-   the first  _longest diagonal_  goes from the top left corner to the bottom right one;
-   the second  _longest diagonal_  goes from the top right corner to the bottom left one.

Given a square  `matrix`, your task is to swap its  _longest diagonals_  by exchanging their elements at the corresponding positions.

Example

For

    matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] 

the output should be

    swapDiagonals(matrix) = [[3, 2, 1], [4, 5, 6], [9, 8, 7]] 

Input/Output

-   **[execution time limit] 3 seconds (java)**
    
-   **[input] array.array.integer matrix**
    
    _Guaranteed constraints:_  
    `1 ≤ matrix.length ≤ 10`,  
    `matrix.length = matrix[i].length`,  
    `1 ≤ matrix[i][j] ≤ 1000`.
    
-   **[output] array.array.integer**
    
    -   Matrix with swapped diagonals.