
Consider a big city located on  `n`  islands. There are bridges connecting the islands, but they all have only one-way traffic. To make matters worse, most of the bridges are closed at night, so there is at most one bridge with traffic going from any island  `A`  to any other island  `B`.

There is a programmer who turns a penny by working nights as an Uber driver. One night his phone dies right after he picks up a rider going from island  `0`  to island  `(n - 1)`. He has the map of the city bridges in his laptop though (stored as a matrix of distances), so he decides to implement an algorithm that calculates the shortest path between those two islands and evaluate the cost based on the distance of the path. Assume that each mile of the trip is  `1$`.

Example

-   For
    
    ```
    city = [[-1, 5, 20],
            [21, -1, 10],
            [-1, 1, -1]]
    
    ```
    
    the output should be  `nightRoute(city) = 15`.
    
    `city[i][j]`  equals the distance between the  `ith`  and the  `jth`  islands in miles, or  `-1`  if there is no bridge by which one can move from island  `i`  to island  `j`.
    
    `nightRoute(city)`  should be  `15`, since the shortest distance from the  `0th`  to the  `2nd`  island is  `15`. The distance from the  `0th`  to the  `1st`  is  `city[0][1] = 5`, and from the  `1st`  to the  `2nd`  is  `city[1][2] = 10`.
    
    ![](https://codesignal.s3.amazonaws.com/tasks/nightRoute/img/example1.png?_tm=1582070559068)
    
-   For
    
    ```
    city = [[-1, 5, 2, 15],
            [2, -1, 0, 3],
            [1, -1, -1, 9],
            [0, 0, 0, -1]]
    
    ```
    
    the output should be  `nightRoute(city) = 8`.
    
    The shortest path is  `0 -> 1 -> 3`  which costs  `5 + 3 = 8`.
    
    ![](https://codesignal.s3.amazonaws.com/tasks/nightRoute/img/example2.png?_tm=1582070559439)
    

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.array.integer city**
    
    The city is represented as a square matrix, where  `city[i][j]`  equals the distance between the  `ith`  and the  `jth`  islands in miles, or  `-1`  if there is no bridge that allows moving in that direction.
    
    _Guaranteed constraints:_  
    `2 ≤ city.length ≤ 10`,  
    `city[i].length = city.length`,  
    `-1 ≤ city[i][j] ≤ 30`.
    
-   **[output] integer**
    
    The cost of the trip. It is guaranteed that there is a route from the  `0th`  to the  `(n - 1)^th`  island.
