
Given a rectangular matrix and integers  `a`  and  `b`, consider the union of the  _ath_  row and the  _bth_  (both  _0-based_) column of the matrix (i.e. all cells that belong either to the  _ath_  row or to the  _bth_  column, or to both). Return sum of all elements of that union.

**Example**

For

    matrix = [
	    [1, 1, 1, 1], 
	    [2, 2, 2, 2], 
	    [3, 3, 3, 3]] 

`a = 1`, and  `b = 3`, the output should be  
`crossingSum(matrix, a, b) = 12`.

Here  `(2 + 2 + 2 + 2) + (1 + 3) = 12`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.array.integer matrix**
    
    2-dimensional array of integers representing a rectangular matrix.
    
    _Guaranteed constraints:_  
    `1 ≤ matrix.length ≤ 5`,  
    `1 ≤ matrix[0].length ≤ 5`,  
    `1 ≤ matrix[i][j] ≤ 100`.
    
-   **[input] integer a**
    
    A non-negative integer less than the number of matrix rows.
    
    _Guaranteed constraints:_  
    `0 ≤ a < matrix.length`.
    
-   **[input] integer b**
    
    A non-negative integer less than the number of matrix columns.
    
    _Guaranteed constraints:_  
    `0 ≤ b < matrix[i].length`.
    
-   **[output] integer**