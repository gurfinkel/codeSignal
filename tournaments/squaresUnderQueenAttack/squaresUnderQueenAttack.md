
_Note: Write a solution with  `O(queries.length + queens.length + n)`  complexity and  `O(n)`  additional memory, since this is what you would be asked to do during a real interview._

In chess, queens can move any number of squares vertically, horizontally, or diagonally. You have an  `n × n`  chessboard with some  `queens`  on it. You are given several  `queries`, each of which represents one square on the chessboard. For each query square, determine whether it can be attacked by a queen or not.

Example

For  `n = 5`,  `queens = [[1, 1], [3, 2]]`, and  `queries = [[1, 1], [0, 3], [0, 4], [3, 4], [2, 0], [4, 3], [4, 0]]`, the output should be  
`squaresUnderQueenAttack(n, queens, queries) = [true, false, false, true, true, true, false]`.

Here are the squares on this chessboard that can be attacked by a queen:

![](https://codesignal.s3.amazonaws.com/tasks/squaresUnderQueenAttack/img/example.png?_tm=1582144118264)

Only squares  `(0, 3)`,  `(0, 4)`,  `(2, 4)`, and  `(4, 0)`  are not under attack.

Input/Output

-   **[execution time limit] 4 seconds (py3)**
    
-   **[input] integer n**
    
    The size of the chessboard.
    
    _Guaranteed constraints:_  
    `1 ≤ n ≤ 10^6`.
    
-   **[input] array.array.integer queens**
    
    The placement of all queens on the chessboard. For each valid  `i`,  `queens[i]`  contains exactly two elements indicating the coordinates of the  `ith`  queen (0-based). It is guaranteed that all queens positions are distinct.
    
    _Guaranteed constraints:_  
    `0 ≤ queens.length ≤ 15 · 10^4`,  
    `queens[i].length = 2`,  
    `0 ≤ queens[i][j] ≤ n - 1`.
    
-   **[input] array.array.integer queries**
    
    The queries. For each valid  `i`,  `queries[i]`  contains exactly two elements indicating the coordinates of the  `ith`  query square (0-based).
    
    _Guaranteed constraints:_  
    `1 ≤ queries.length ≤ 10^4`,  
    `queries[i].length = 2`,  
    `0 ≤ queries[i][j] ≤ n - 1`.
    
-   **[output] array.boolean**
    
    -   For  `ith`  query, return  `true`  if this square can be attacked by a queen and  `false`  otherwise.