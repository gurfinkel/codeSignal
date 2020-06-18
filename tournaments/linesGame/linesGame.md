
Let's remember the '90s and play an old-school  _Lines_  game with the following rules.

The game starts with a  `9 × 9`  field with several colored balls placed on its cells (there are 7 possible colors but not all colors have to be present initially). The player can move one ball per turn, and they may only move a ball if there is a clear path between the current position of the chosen ball and the desired destination. Clear paths are formed by neighboring empty cells. Two cells are neighboring if they have a common side. The goal is to remove balls by forming lines (horizontal, vertical or diagonal) of at least five balls of the same color. If the player manages to form one or more such lines, the move is called  _successful_, and the balls in those lines disappear. Otherwise, the move is called  _unsuccessful_, and three more balls appear on the field.

You are given the game logs, and your task is to calculate the player's final score. Here's the information you have:

-   The  `field`  state at the initial moment;
-   The  `clicks`  the user has made. Note that a click does not necessarily result in a move:
    -   If the user clicks a ball and then another, the first click is ignored;
    -   If two consecutive clicks result in an incorrect move, they are ignored;
-   After each  _unsuccessful_  move three more balls appear:
    -   `newBalls`  contains the balls' colors;
    -   `newBallsCoordinates`  contains their coordinates;
    -   Note that after the balls appear, new lines may form;
-   _Whenever_  new lines appear, they are removed and the player receives  `A + B - 1`  points, where:
    -   `A`  is the number of lines of at least five balls;
    -   `B`  is the total number of balls in those lines;
-   Possible ball colors are  _red_,  _blue_,  _orange_,  _violet_,  _green_,  _yellow_  and  _cyan_, which are represented in logs by  
    `"R"`,  `"B"`,  `"O"`,  `"V"`,  `"G"`,  `"Y"`  and  `"C"`  respectively.

Example

-   For
    
    ```
    field = [['.', 'G', '.', '.', '.', '.', '.', '.', '.'],
             ['.', '.', '.', '.', '.', '.', '.', 'V', '.'],
             ['.', 'O', '.', '.', 'O', '.', '.', '.', '.'],
             ['.', '.', '.', '.', 'O', '.', '.', '.', '.'],
             ['.', '.', '.', '.', '.', '.', '.', '.', 'O'],
             ['.', '.', '.', '.', 'O', '.', '.', '.', '.'],
             ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
             ['R', '.', '.', '.', '.', '.', '.', 'B', 'R'],
             ['.', '.', 'C', '.', '.', '.', '.', 'Y', 'O']]
    
    ```
    
    `clicks = [[4, 8], [2, 1], [4, 4], [6, 4], [4, 8], [1, 2], [1, 4], [4, 8], [6, 4]]`,  
    `newBalls = ['R', 'V', 'C', 'G', 'Y', 'O']`, and  
    `newBallsCoordinates = [[1, 2], [8, 5], [8, 6], [1, 1], [1, 8], [7, 4]]`, the output should be  
    `linesGame(field, clicks, newBalls, newBallsCoordinates) = 6`.
    
    The only correct moves were:
    
    -   Orange ball moved from  `[2, 1]`  to  `[4, 4]`;
    -   Red ball moved from  `[1, 2]`  to  `[1, 4]`;
    -   Orange ball moved from  `[4, 8]`  to  `[6, 4]`
    
    After the third move a vertical line with  `6`  orange balls appears, so it is removed and the player receives  `1 + 6 - 1 = 6`  points.
    
    ![](https://codesignal.s3.amazonaws.com/tasks/linesGame/img/example1.jpg?_tm=1582036905719)
    
-   For
    
    ```
    field = [['.', '.', '.', '.', '.', '.', '.', '.', '.'],
             ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
             ['.', '.', 'O', '.', 'O', '.', 'O', '.', '.'],
             ['.', '.', '.', 'O', 'O', 'O', '.', '.', '.'],
             ['.', '.', '.', '.', '.', '.', '.', '.', 'O'],
             ['.', '.', '.', 'O', 'O', 'O', '.', '.', '.'],
             ['.', '.', 'O', '.', 'O', '.', 'O', '.', '.'],
             ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
             ['.', '.', '.', '.', '.', '.', '.', '.', '.']]
    
    ```
    
    `clicks = [[4, 8], [4, 4]]`,  
    `newBalls = []`, and  
    `newBallsCoordinates = []`, the output should be  
    `linesGame(field, clicks, newBalls, newBallsCoordinates) = 17`.
    
    After the move there will be three lines with exactly  `5`  balls of the same color, so the answer is  `3 + (5 + 5 + 5) - 1 = 17`.
    
    ![](https://codesignal.s3.amazonaws.com/tasks/linesGame/img/example2.jpg?_tm=1582036906009)
    

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.array.char field**
    
    A rectangular matrix, where each element represents either a ball of some color (see above), or an empty cell (`'.'`).  
    It is guaranteed that initially there are no lines of five or more balls of the same color.
    
    _Guaranteed constraints:_  
    `field.length = 9`,  
    `field[i].length = 9`.
    
-   **[input] array.array.integer clicks**
    
    Each element of  `clicks`  consists of two integers and represents some cell from  `fields`  that was clicked.
    
    _Guaranteed constraints:_  
    `2 ≤ clicks.length ≤ 40`,  
    `0 ≤ clicks[i][j] ≤ 8`.
    
-   **[input] array.char newBalls**
    
    It is guaranteed that there are enough elements in the array to add balls after each  _unsuccessful_  move.
    
    _Guaranteed constraints:_  
    `0 ≤ newBalls.length ≤ 60`.
    
-   **[input] array.array.integer newBallsCoordinates**
    
    The  `ith`  element represents the coordinates of the  `ith`  appeared ball.  
    It is guaranteed that balls are added only to the empty cells.
    
    _Guaranteed constraints:_  
    `newBallsCoordinates.length = newBalls.length`,  
    `newBallsCoordinates[i].length = 2`,  
    `0 ≤ newBallsCoordinates[i][j] ≤ 8`.
    
-   **[output] integer**
    
    -   The player's final score.