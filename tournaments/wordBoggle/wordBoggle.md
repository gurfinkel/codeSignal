
Boggle is a popular word game in which players attempt to find words in sequences of adjacent letters on a rectangular board.

Given a two-dimensional array  `board`  that represents the character cells of the Boggle board and an array of unique strings  `words`, find all the possible words from  `words`  that can be formed on the board.

Note that in Boggle when you're finding a word, you can move from a cell to any of its  `8`  neighbors, but you can't use the same cell twice in one word.

Example

For

```
board = [
    ['R', 'L', 'D'],
    ['U', 'O', 'E'],
    ['C', 'S', 'O']
]

```

and  `words = ["CODE", "SOLO", "RULES", "COOL"]`, the output should be  
`wordBoggle(board, words) = ["CODE", "RULES"]`.

![Example](https://codesignal.s3.amazonaws.com/tasks/wordBoggle/img/example.png?_tm=1551563226136)

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.array.char board**
    
    A two-dimensional array of uppercase English characters representing a rectangular Boggle board.
    
    _Guaranteed constraints:_  
    `2 ≤ board.length ≤ 4`,  
    `2 ≤ board[i].length ≤ 4`,  
    `'A' ≤ board[i][j] ≤ 'Z'`.
    
-   **[input] array.string words**
    
    An array of  _unique_  English words composed only of uppercase English characters.
    
    _Guaranteed constraints:_  
    `0 ≤ words.length ≤ 100`,  
    `2 ≤ words[i].length ≤ 16`,  
    `'A' ≤ words[i][j] ≤ 'Z'`.
    
-   **[output] array.string**
    
    -   Words from  `words`  that can be found on the Boggle board  _without duplicates and sorted  lexicographically  in ascending order_.