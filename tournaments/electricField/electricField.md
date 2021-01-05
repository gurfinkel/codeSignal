
Little Ratiorg was tired of being bullied by other bots and mighty CodeFighters, so he joined the Ninja Bots Training camp. Any bot that manages to solve all the challenges becomes an ultimate master of algorithms, and that is exactly what Ratiorg wants.

It's been several weeks, and Ratiorg already feels how much stronger he has become. However, Ratiorg is about to face his first really exciting challenge: the Electric Field. It works like this: the bot stays in the top left corner of a rectangular  `grid`. In one move he can walk to one of the nearest cells (directly above, below, to the left or to the right of his current position). Ratiorg's goal is to get to the bottom right corner in the least possible number of moves. However, it's not as simple as it seems: there are electric  `wires`  running through the grid. If Ratiorg steps on a wire, his microchips will be burnt to a crisp, so Ratiorg, prudent bot that he is, wants to do his best to avoid them.

You want to give Ratiorg a hint by telling him the least possible number of moves required to get to the destination. Given the  `grid`  and the  `wires`, return the minimum number of moves required to get to the bottom right corner from the top left corner. If it's not possible to get there, return  `-1`  instead.

Example

For  `grid = [4, 8]`  and

```
wires = [[1, 0, 1, 3], [3, 1, 3, 2], [4, 1, 4, 3], [4, 2, 4, 4],
         [1, 3, 3, 3], [2, 1, 7, 1], [2, 2, 7, 2], [5, 3, 8, 3]]

```

the output should be  
`electricField(grid, wires) = 26`.

Check out the image below for better understanding. The wires are colored red, and the path Ratiorg should take is colored green.

![](https://codesignal.s3.amazonaws.com/tasks/electricField/img/example.png?_tm=1582016058965)

Input/Output

-   **[execution time limit] 4 seconds (js)**

-   **[input] array.integer grid**

    Array of two elements, where the first element is the height and the second element is the width of the field.

    _Guaranteed constraints:_  
    `grid.length = 2`,  
    `1 ≤ grid[i] ≤ 100`.

-   **[input] array.array.integer wires**

    Array of electric wires located on the grid. Each wire is given in the format  `[_x1_,  _y1_,  _x2_,  _y2_]`, where  `(_x1_,  _y1_)`  is position of the first endpoint and  `(_x2_,  _y2_)`  is position of the second endpoint.  `x`  represents the  _x_  coordinate on the axis that runs along the width of the  `grid`, and  `y`  represents the  _y_  coordinate on the axis that runs along the height of the  `grid`.

    It is guaranteed that for each  `i`  either  `wires[i][0] = wires[i][2]`  or  `wires[i][1] = wires[i][3]`, but not simultaneously.  
    The wires can intersect and overlap.

    _Guaranteed constraints:_  
    `0 ≤ wires.length ≤ 100`,  
    `wires[i].length = 4`,  
    `0 ≤ wires[0], wires[2] ≤ grid[1].length`,  
    `0 ≤ wires[1], wires[3] ≤ grid[0].length`.

-   **[output] integer**

    The minimum number of moves required to get from the top left to the bottom right corner of the  `grid`  without stepping on the  `wires`, or  `-1`  if it's impossible to get there.