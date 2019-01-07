
Consider a robot standing on a 2-dimensional grid at point (0, 0). It follows a sequence of instructions.

Each instruction is processed as follows:

-   `'L'`  decreases the first coordinate by one,
-   `'R'`  increases the first coordinate by one,
-   `'U'`  increases the second coordinate by one,
-   `'D'`  decreases the second coordinate by one.

But the robot isn't allowed to leave a pre-defined square (with sides parallel to the axes) centered at  `(0,0)`. If the execution of the current instruction would lead to the robot leaving the square, that instruction is just ignored.

Given a sequence of instructions and a restricting square, output an array of two integers representing the final position of the robot after executing all the instructions.

Example

For  `instructions = "LLLLUUUUDR"`  and  `bound = 2`, the output should be  
`robotPath(instructions, bound) = [-1, 1]`.

The restricting square is  `(2, 2), (2, -2), (-2, -2), (-2, 2)`.

Check out the image below for better understanding:

![](https://codefightsuserpics.s3.amazonaws.com/tasks/robotPath/img/example.jpg?_tm=1530813592362)

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] string instructions**
    
    A non-empty string consisting of characters  `'L'`,  `'R'`,  `'U'`  and  `'D'`.
    
    _Guaranteed constraints:_  
    `5 ≤ instructions.length ≤ 15`.
    
-   **[input] integer bound**
    
    A positive integer equal to the  _half-length_  of the restricting square's side.
    
    _Guaranteed constraints:_  
    `1 ≤ bound ≤ 5`.
    
-   **[output] array.integer**