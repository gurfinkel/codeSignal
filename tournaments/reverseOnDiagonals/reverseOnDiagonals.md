
The  _longest diagonals_  of a square matrix are defined as follows:

-   the first  _longest diagonal_  goes from the top left corner to the bottom right one;
-   the second  _longest diagonal_  goes from the top right corner to the bottom left one.

Given a square matrix, your task is to reverse the order of elements on both of its  _longest diagonals_.

Example

For

    matrix = [[1, 2, 3], 
              [4, 5, 6], 
              [7, 8, 9]] 

the output should be

    reverseOnDiagonals(matrix) = [[9, 2, 7], 
                                  [4, 5, 6], 
                                  [3, 8, 1]] 

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.array.integer matrix**
    
    _Guaranteed constraints:_  
    `1 ≤ matrix.length ≤ 10`,  
    `matrix.length = matrix[i].length`,  
    `1 ≤ matrix[i][j] ≤ 1000`.
    
-   **[output] array.array.integer**
    
    -   Matrix with the order of elements on its  _longest diagonals_  reversed.