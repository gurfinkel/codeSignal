
A robot is standing at the  `(0, 0)`  point of the Cartesian plane and is oriented towards the vertical (y) axis in the direction of increasing  _y_values (in other words, he's facing  _up_, or  _north_). The robot executes several commands each of which is a single positive integer. When the robot is given a positive integer  `K`it moves  `K`  squares forward and then turns  `90`  degrees clockwise.

The commands are such that both of the robot's coordinates stay  **non-negative**.

Determine if there is a square that the robot visits at least twice after executing all the commands.

Example

For  `a = [4, 4, 3, 2, 2, 3]`, the output should be  
`robotWalk(a) = true`.

The path of the robot looks like this:

![](https://codefightsuserpics.s3.amazonaws.com/tasks/robotWalk/img/path.png?_tm=1530813594888)

The point  `(4, 3)`  is visited twice, so the answer is  `true`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer a**
    
    An array of positive integers, each number representing a command.
    
    _Guaranteed constraints:_  
    `3 ≤ a.length ≤ 10`,  
    `1 ≤ a[i] ≤ 105`.
    
-   **[output] boolean**
    
    -   `true`  if there is a square that the robot visits at least twice,  `false`  otherwise.