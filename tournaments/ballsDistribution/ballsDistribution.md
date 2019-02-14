
You have a set of balls that are colored in such a way that there is  `ballsPerColor`  balls of each of the given number of  `colors`. You also have an infinite number of boxes of the same max capacity  `boxSize`.

You distribute the balls among the boxes as follows:

-   first you fill up the first box, then the second, etc.
-   first you use all of the balls of the first color, then all of the balls of the second color, etc.

Find the number of colors for which there is more than one box that contains a ball of that color.

Example

For  `colors = 3`,  `ballsPerColor = 5`, and  `boxSize = 6`, the output should be  
`ballsDistribution(colors, ballsPerColor, boxSize) = 2`.

Here's how balls are distributed between the boxes:

-   the first box contains  `5`  balls of the first color and  `1`  ball of the second color;
-   the second box contains  `4`  balls of the second color and  `2`  balls of the third color;
-   the third box contains the remaining  `3`  balls of the third color.

All balls of the first color end up in one box, and balls of the second and the third colors are split between two boxes each. Thus, the answer is  `2`.

Check out the image below for better understanding:

![](https://codefightsuserpics.s3.amazonaws.com/tasks/ballsDistribution/img/example.png?_tm=1530791194652)

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] integer colors**
    
    The number of colors as a positive integer.
    
    _Guaranteed constraints:_  
    `3 ≤ colors ≤ 30`.
    
-   **[input] integer ballsPerColor**
    
    The number of balls of each color as a positive integer.
    
    _Guaranteed constraints:_  
    `5 ≤ ballsPerColor ≤ 30`.
    
-   **[input] integer boxSize**
    
    The max capacity of the boxes as a positive integer.
    
    _Guaranteed constraints:_  
    `5 ≤ boxSize ≤ 30`.
    
-   **[output] integer**