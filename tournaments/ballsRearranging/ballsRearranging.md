
An infinite number of boxes are arranged in a row and numbered from left to right. The first box on the left is number  `1`, the next box is number  `2`, etc.  `n`  balls are placed in  `n`  of the boxes, and there can only be one ball per box. You want to organize the balls, so you decide to arrange all the balls next to each other. They should occupy a contiguous set of boxes. You can take one ball and move it into an empty box in one move.

Given an array  `balls`  that indicates the numbers of the boxes in which the balls are placed, find the minimum number of moves needed to organize the balls.

Example

For  `balls = [6, 4, 1, 7, 10]`, the output should be  
`ballsRearranging(balls) = 2`.

In this example, the minimum number of moves needed to arrange the balls next to each other is  `2`. You could move the ball in box  `1`  to box  `5`  and the ball in box  `10`  to box  `8`  (or to box  `3`).

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer balls**
    
    An array of balls. The  `ith`  element indicates the number of the box where the  `ith`  ball is placed. It is guaranteed that all the elements in the array are distinct.
    
    _Guaranteed constraints:_  
    `1 ≤ balls.length ≤ 105`,  
    `1 ≤ balls[i] ≤ 109`.
    
-   **[output] integer**
    
    -   The minimum number of moves needed to organize the balls into a contiguous set of boxes.