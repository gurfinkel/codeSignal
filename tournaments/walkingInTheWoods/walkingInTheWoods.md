
After you got lost in the woods the last time, you made sure to memorize the entire map, so now you can walk around without the fear. When you were studying the map, you realized that it might be impossible to visit all the meadows walking on the roads. In order to get from one set of connected meadows to the other one has to go thought the thicket of thistle.

Naturally, you don't want to struggle through the thicket too often. Given the number of meadows  `n`  and the map of the woods  `wmap`  storing the information about the roads connecting them, calculate the minimal number of times you'd have to go off the roads in order to visit all the meadows in one run.

Example

-   For  `n = 5`  and  `wmap = [[0, 1], [2, 1], [0, 2], [3, 4]]`, the output should be  
    `walkingInTheWoods(n, wmap) = 1`.

    ![](https://codesignal.s3.amazonaws.com/tasks/walkingInTheWoods/img/example1.png?_tm=1582157217222)

    Starting from any of first three meadows, you can visit any of them, then visit meadow  `3`  walking through thicket, and then visit meadow  `4`.  
    Starting from any of two last meadows, you can do the same thing.

-   For  `n = 6`  and  `wmap = [[0, 1], [2, 1], [0, 2], [3, 4]]`, the output should be  
    `walkingInTheWoods(n, wmap) = 2`.

    ![](https://codesignal.s3.amazonaws.com/tasks/walkingInTheWoods/img/example2.png?_tm=1582157217446)

    Here you need to visit one more meadow that isn't connected to any of the other ones, so you'll need to walk through the thicket one more time.


Input/Output

-   **[execution time limit] 4 seconds (js)**

-   **[input] integer n**

    The number of meadows in the woods.

    _Guaranteed constraints:_  
    `1 ≤ n ≤ 10^5`.

-   **[input] array.array.integer wmap**

    Edges drawn on the map.  `wmap[i]`  for each valid  `i`  contains two elements and represents a road that connects  `wmap[i][0]`  and  `wmap[i][1]`.  
    It is guaranteed that between any two vertices there is no more than one edge.

    _Guaranteed constraints:_  
    `0 ≤ wmap.length ≤ 10^5`,  
    `wmap[i].length = 2`,  
    `0 ≤ wmap[i][j] < n`.

-   **[output] integer**

    The minimal number of times you'll need to walk through the thicket to visit all the meadows.