
You have a block with the dimensions  `4 × n`. Find the number of different ways you can fill this block with smaller blocks that have the dimensions  `1 × 2`. You are allowed to rotate the smaller blocks.

Example

-   For  `n = 1`, the output should be  
    `fillingBlocks(n) = 1`.
    
    There is only one possible way to arrange the smaller  `1 × 2`  blocks inside the  `4 × 1`  block.
    
-   For  `n = 4`, the output should be  
    `fillingBlocks(n) = 36`.
    
    Here are the  `36`  possible configuration of smaller blocks inside the  `4 × 4`  block:  
    ![](https://codesignal.s3.amazonaws.com/tasks/fillingBlocks/img/ex2.png?_tm=1582019469566)
    

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer n**
    
    _Guaranteed constraints:_  
    `1 ≤ n ≤ 21`.
    
-   **[output] integer**
    
    -   An integer representing the number of possible configurations of smaller blocks within the larger block.
