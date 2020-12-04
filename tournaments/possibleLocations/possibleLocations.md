
Not long ago you saw an orienteering competition on TV and immediately wanted to try it yourself. You've joined an orienteering club and started preparing for the upcoming competitions.

One day your club announced that it was going to organize its own orienteering competition and you decided to help.  
This competition will be held in a place consisting of  `n`  different locations (numbered from  `0`  to  `n - 1`) connected by one-way  `roads`. Furthermore, each road will have a number of points assigned to it: each time a participant traverses a road, this number will be added to his score. The participant who finishes with the least number of points wins. Note, that the participant can choose to continue his path to improve his score even if he reached the finish.

The organizers of the event asked you to find all possible pairs of  `(start, finish)`  locations, such that for any participant it would be impossible to gain infinitely small score.

Given the number of locations  `n`  and  `roads`  between them with their respective points, return an array of arrays of two elements  `[i, j]`  such that  `i ≠ j`  and location  `j`  is reachable from  `i`  but it is impossible to gain infinitely small score moving along any path between them.

Example

For  `n = 7`  and

```
roads = [[[1, 100]],
         [[0, -10], [2, -100]],
         [[0, 0]],
         [[0, 3], [4, 0]],
         [[5, 1]],
         [[3, -2]],
         [[0, -50]]]

```

the output should be

```
possibleLocations(n, roads) = [[0, 1], [0, 2], 
                               [1, 0], [1, 2], 
                               [2, 0], [2, 1], 
                               [6, 0], [6, 1], [6, 2]]

```

![Example](https://codesignal.s3.amazonaws.com/tasks/possibleLocations/img/example1.png?_tm=1582080088112)

Input/Output

-   **[execution time limit] 4 seconds (js)**

-   **[input] integer n**

    The number of locations.

    _Guaranteed constraints:_  
    `1 ≤ n ≤ 1000`.

-   **[input] array.array.array.integer roads**

    Array representing roads between locations as an  adjacency list.  
    `roads[i][j] = [k, p]`  means that there is a road from location  `i`  to location  `k`  that gives  `p`  points.

    _Guaranteed constraints:_  
    `roads.length = n`,  
    `1 ≤ roads[i].length < n`,  
    `roads[i][j].length = 2`,  
    `0 ≤ roads[i][j][0] < n`,  
    `-1000 ≤ roads[i][j][1] ≤ 1000`.

-   **[output] array.array.integer**

    An array of arrays representing pairs of location numbers  `[i, j]`  such that  `i ≠ j`  and location  `j`  is reachable from  `i`  but it is impossible to gain infinitely small score moving along any path between them.
